# EduHub
 CMPT 474 Web Systems Architecture Group Project

- Currently in the initial steps of design and we are first working on our System Architecture. we are building a serverless microservices based archtecture.
- It is for a project called EduHub,  Initial steps of a student forum website, there is backend.rar file which has to be unzipped, uploaded to Google Cloud Platform, specifically google cloud functions, frontend folder has frontend code which also has to be uploaded to Google Cloud Platform specifically google cloud storage, this code is in initial steps but we will do design and other features later.

## Instructions for back end:
- Upload the code to Google Cloud Functions
- You will have to set the entry point, it is the name of the function.

## Instructions for front end:
- go to the client folder with cd client and type in npm run build
- go to google cloud storage
- make a new empty bucket  
- in the bucket add the build folder created from above and also add the app.yaml file into the bucket
- click on the google cloud sdk shell and you should currently be in your project e.g the line should say (user@cloudshell:~ (gcpproject)$)
- if not in project, you can set your project to gcloud config set project [PROJECT_ID]
- Next you must make a folder using the command 'mkdir eduhub'
- Now you can type in gsutil rsync -r gs://[ADD BUCKET NAME] ./eduhub
- Next type cd eduhub
- Check if both build and app.yaml are inside the folder using ls, and then type gcloud app deploy
- Follow the prompts and when deployed a url will be given

