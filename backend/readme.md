# Visual recogniton set-up

1. go here (<https://dataplatform.cloud.ibm.com/projects?context=data)> and create new project.  

2. Open the project and in assets tab, add two folders(Zip) Yes.zip and No.zip.

3. Goto settings tab, Associated services, Add service, select watson, in next page, create a new service.

4. Now go to this page.(<https://dataplatform.cloud.ibm.com/home?context=data)> and find the service.

5. Create two new classes yes and no and put respective zip's in each of them and click train.

6. After training is done, go to back-end code and use it.

7. The flow that occurs here is upload->file comes to back-end->we put in s3 bucket->give the file link to ibm watson->get the result from visual recog model.
