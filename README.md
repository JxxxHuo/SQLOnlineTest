# SQLOnlineTest
This project is to design a lightweight interactive online SQL exercise and assessment for students.


## How to Use ?
1. put the web folder directly in an Apache or Tomcat server, for example [http://localhost:8080/index.html](http://localhost:8080/index.html).

    ![databasefrontpage](/images/databasefrontpage.png)
Then, you can start SQL exercises immediately! Simply click run to view the query result.
     ![runwithresult](/images/runwithresult.png)

Alternatively, You can also use npm http-server package to run the server.


2. To receive the student submission to the data folder, run
''
node app.js
''
Then you should configure your reverse proxy to get the post request.


3. The reveived submission will be saved in web\data\ directory, which includes the client browser fingerprint in "finger" JSON key. If you want to process these client submissions, you can use [web\dataprocess.py](https://github.com/JxxxHuo/SQLOnlineTest/web/dataprocess.py) to score and save to a database.
The score of each question is defined in a python dict "sdict".
