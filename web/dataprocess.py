#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue May 17 10:25:53 2022
@author: b
"""

import os
import json
import pymysql

sdict={'q1': 2, 'q2': 2, 'q3': 2, 'q4': 2, 'q5': 2, 'q6': 2, 
       'q7': 2, 'q8': 2, 'q9': 2, 'q10': 2, 'q11': 2, 'q12': 2, 
       'q13': 2, 'q14': 2, 'q15': 2, 'q16': 2, 'q17': 2, 'q18': 2,
       'q19': 2, 'q20': 2}

def marksc(my, stu,sdict):
    score=0
    for key in my.keys():
        if stu.get(key)==my.get(key):
            score=score+sdict[key]
    return score

path=os.curdir+'/data/'
file_name_list = os.listdir(path)
mypath='template.txt'
myjson=dict()


with open(path+mypath, mode='r', encoding='utf-8') as f1:
     myjson=json.load(f1)
     f1.close()
     
if 'questions' not in myjson.keys():
    print('the template does not have answers')
    exit(0)

try:
    conn=pymysql.connect(host='localhost',port=3306,user='root',
                         database='db2022',autocommit=True,charset='utf8',password='xX123456@')
    
    cur=conn.cursor()
    
    for file in file_name_list:
        with open(path+file, mode='r', encoding='utf-8') as f2:
            top = json.load(f2)
            name=top['name'].strip()
            stuID=top['stuID'].strip()
            finger=top['finger']
            date=top['time']
            
            score=marksc(myjson['questions'],top['questions'],sdict)
           
            query='insert into exam (stuID,name,score,finger,date) values (%s,%s,%s,%s,%s);'
            cur.execute(query,(stuID,name,score,finger,date))
            f2.close()
    conn.close()
except Exception as e:
    print('There is error:' % e)