# Huawei HiLink Documentation

آخر تحديث: 2026-07-22

---

# الهدف

هذا الملف هو المرجع الرسمي لكل ما يتعلق بمودمات Huawei HiLink المستخدمة في مشروع TehnaPay Connect.

---

# المودم الحالي

النوع:
Huawei HiLink

عنوان المودم:

http://192.168.62.1

---

# التقنيات المستخدمة

- HTTP
- XML
- Session
- Token
- REST API

---

# Session

Endpoint

/api/webserver/SesTokInfo

يعيد:

- SessionID
- TokInfo

مثال:

```xml
<response>
    <SesInfo>...</SesInfo>
    <TokInfo>...</TokInfo>
</response>
```

---

# Headers

GET

Cookie:

SessionID

POST

Cookie:

SessionID

RequestVerificationToken:

TokInfo

Content-Type:

application/xml

---

# العمليات الحالية

✅ Device Information

✅ Session

✅ Token

✅ GET

✅ POST

✅ USSD

---

# العمليات القادمة

☐ SMS Read

☐ SMS Send

☐ Signal Information

☐ Network Information

☐ Balance

☐ Multiple Modems

---

# Huawei Client

الإصدار الحالي:

V1

الوظائف الحالية:

- modemGet()
- modemPost()
- buildUssdXml()

---

# Huawei Client V2

المطلوب:

- Session Cache
- Auto Retry
- Logging
- Class Architecture

---

# أخطاء معروفة

## Error 125002

السبب المحتمل:

انتهاء Session أو Token.

الحل:

إنشاء Session جديدة ثم إعادة تنفيذ الطلب.

---

# قواعد

- لا يتم استدعاء SesTokInfo قبل كل Request.
- إعادة استخدام Session حتى تنتهي صلاحيتها.
- عند فشل Session يتم تحديثها تلقائياً.
- جميع أوامر Huawei تبقى داخل Huawei Client فقط.

---

# ملاحظات

أي Endpoint جديد أو تجربة ناجحة أو مشكلة يتم توثيقها في هذا الملف.
