# SECURITY REPORT — API INPUT CONTROL

## 1. NoSQL Injection
Payload:
{ "email": { "$gt": "" } }

Result:
 Blocked by mongo-sanitize


## 2. XSS Attack
Payload:
{ "name": "<script>alert(1)</script>" }

Result:
 Script removed


## 3. Payload Overflow
Payload > 10kb

Result:
 413 Payload Too Large


## 4. Rate Limiting
150 requests in 15 mins

Result:
 429 Too Many Requests


## 5. Extra Fields (Mass Assignment)
Payload:
{ "role": "admin", "isAdmin": true }

Result:
 Extra field stripped
