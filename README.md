# React-Firebase Connect Project

## What is the 'firebase'

- 데이터베이스의 한 종류
- NoSQL 형태
- Firebase와 FireStore로 나눌 수 있음

<pre>
    1. Cloud Function
    2. Auth
    3. Hosting
    4. ML
</pre>

## 구조

- Collection : 문서의 집합
- Document : 필드와 값 + 또 다른 Collection을 가질 수 있다.

## 사용

- [x] yarn add firebase (npm install firebase)

## Project build

1. yarn run build
2. npm install -g firebase-tools
3. firebase login
4. firebase init
   <pre>
       1. select [hosting ...]
       2. select [existing project...]
       3. not public -> write "build"
       4. choice single page app
       5. Overide -> No.
   </pre>
5. firebase deploy --only hosting
