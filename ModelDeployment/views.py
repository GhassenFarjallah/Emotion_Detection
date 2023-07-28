from django.shortcuts import render
from django.http import JsonResponse

from tensorflow.keras.models import load_model 
import cv2 
import random 
import numpy as np 
from time import time

emotion_dict = {0: "Angry", 1: "Happy", 2: "Neutral", 3: "Sad", 4: "Surprised"}
Emotions_weight = [0, 0, 0, 0, 0]
Model = load_model('./Model/Model.h5')

def detect_emotion():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Unable to access the camera. Please check your camera connection or camera index.")
        cap.release()
        cv2.destroyAllWindows()
        exit()

    current_emotion = None
    color = None
    start=time()
    while time()-start <20 :
        ret, frame = cap.read()

        if not ret:
            print("Error: Unable to read frame from the camera.")
            break

        frame = cv2.flip(frame, 1)
        frame = cv2.resize(frame, (640, 480))
        face_detector = cv2.CascadeClassifier('./FaceDetector/haarcascade_frontalface_default.xml')

        num_faces = face_detector.detectMultiScale(frame, scaleFactor=1.3, minNeighbors=5)

        for (x, y, w, h) in num_faces:
            roi_gray_frame = frame[y:y + h, x:x + w]
            cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray_frame, (48, 48)), -1), 0)

            # predict the emotions
            emotion_prediction = Model.predict(cropped_img)
            maxindex = int(np.argmax(emotion_prediction))
            probability = emotion_prediction[0][maxindex] * 100
            emotion_label = emotion_dict[maxindex]
            text = f"{emotion_label}: {probability:.2f}%"
            Emotions_weight[maxindex]+=1 

            if current_emotion != emotion_label:
                color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
                current_emotion = emotion_label

            # Draw rectangle with the same color as the bounding box around the text
            text_size = cv2.getTextSize(text, cv2.FONT_HERSHEY_SIMPLEX, 1, 1)[0]
            cv2.rectangle(frame, (x, y - 40), (x + text_size[0] + 10, y ), color, -1)
            cv2.putText(frame, text, (x + 5, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 0), 1, cv2.LINE_AA)

            cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)

        cv2.imshow('Emotion Detection', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

    R1 = emotion_dict[np.argmax(Emotions_weight)]
    Emotions_weight[np.argmax(Emotions_weight)] = 0
    R2 = emotion_dict[np.argmax(Emotions_weight)]
    Emotions_weight[np.argmax(Emotions_weight)] = 0
    R3 = emotion_dict[np.argmax(Emotions_weight)]
    result = {
            'result1': R1,
            'result2': R2,
            'result3': R3,
        }
    # return render(request, 'result.html', result) 
    return  result 
        
def show_results(request):
    if request.method == 'POST':
        result = detect_emotion()
        return JsonResponse(result)
    else :
        return render(request, 'main.html') 

