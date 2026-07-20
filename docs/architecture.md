# Architecture

آخر تحديث: 2026-07-22

# نظرة عامة

يتكون مشروع TehnaPay Connect من خمس طبقات رئيسية:

```
Laravel
    │
REST API
    │
Node.js Agent
    │
Huawei Client
    │
Huawei HiLink Modem
```

---

# Laravel

المسؤوليات:

- لوحة التحكم
- المستخدمون
- المحافظ
- العمليات
- إدارة الوكلاء
- إدارة المودمات
- API

Laravel لا يتصل بالمودم مباشرة.

---

# Node.js Agent

المسؤوليات:

- استقبال الطلبات من Laravel
- تنفيذ الطلبات على المودم
- إعادة النتائج

كل Agent يمكنه التحكم في مودم واحد أو أكثر.

---

# Huawei Client

المسؤوليات:

- الاتصال بالمودم
- إدارة Session
- إدارة Token
- تنفيذ GET
- تنفيذ POST
- تنفيذ USSD
- تنفيذ SMS

Huawei Client هو مكتبة مستقلة ولا يعتمد على Laravel.

---

# Huawei Modem

المسؤوليات:

- تنفيذ أوامر USSD
- إرسال SMS
- استقبال SMS
- قراءة حالة الشبكة
- قراءة قوة الإشارة

---

# قاعدة التصميم

Laravel
لا يعرف شيئًا عن Huawei.

Agent
لا يعرف شيئًا عن قاعدة البيانات.

Huawei Client
لا يعرف شيئًا عن Laravel.

كل طبقة مستقلة.

---

# اتجاه البيانات

Laravel

↓

API

↓

Agent

↓

Huawei Client

↓

Huawei Modem

↓

SIM Card

↓

النتيجة

↓

Huawei Client

↓

Agent

↓

Laravel

---

# قابلية التوسع

المشروع مصمم لدعم:

- مودم واحد
- عدة مودمات
- عدة Agents
- عدة خوادم

بدون تغيير في بنية النظام.

---

# المبدأ الأساسي

كل مكون يؤدي وظيفة واحدة فقط (Single Responsibility Principle).
