# Visual recogniton set-up

1. go here (<https://dataplatform.cloud.ibm.com/projects?context=data)> and create new project.  

2. Open the project and in assets tab, add two folders(Zip) Yes.zip and No.zip.

3. Goto settings tab, Associated services, Add service, select watson, in next page, create a new service.

4. Now go to this page.(<https://dataplatform.cloud.ibm.com/home?context=data)> and find the service.

5. Create two new classes yes and no and put respective zip's in each of them and click train.

6. After training is done, go to back-end code and use it.

7. The flow that occurs here is upload->file comes to back-end->we put in s3 bucket->give the file link to ibm watson->get the result from visual recog model.

## Sources

<https://cloud.ibm.com/services/watson-vision-combined/crn%3Av1%3Abluemix%3Apublic%3Awatson-vision-combined%3Aus-south%3Aa%2F44c51f4af89a4643aa85955e2ddd88a3%3A6fe19240-a98d-4e6e-afa1-ffd8a6bcfd60%3A%3A?paneId=gettingStarted&new=true>
<https://cloud.ibm.com/apidocs/visual-recognition/visual-recognition-v3?code=node#classify-images>
<https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-tutorial-custom-classifier&locale=en-US>
