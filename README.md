# EduHub
 CMPT 474 Web Systems Architecture Group Project

- Currently in the initial steps of design and we are first working on our System Architecture. we are building a serverless microservices based archtecture.
- It is for a project called EduHub,  Initial steps of a student forum website, there is backend.rar file which has to be unzipped, uploaded to Google Cloud Platform, specifically google cloud functions, frontend folder has frontend code which also has to be uploaded to Google Cloud Platform specifically google cloud storage, this code is in initial steps but we will do design and other features later.

## Instructions for back end:
- Upload the code to Google Cloud Functions
- You will have to set the entry point, it is the name of the function.

## Instructions for front end:

- goto google cloud storage
- make a new empty bucket  
- so for each google function there is a url, addd that into its relevant function.html and then upload frontend.html files
- in frontend bucket update permission for allUsers and role Storage Object Viewer
- in google cloud sdk shell do gsutil web set -m index.html gs://<frontend bucket name>
- your page will be hosted at https://storage.googleapis.com/<frontend bucket name>/index.html


