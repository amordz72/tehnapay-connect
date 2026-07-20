# AI_CONTEXT.md

# TehnaPay Connect

النسخة: 0.1
آخر تحديث: 2026-07-22

---

# هدف المشروع

TehnaPay Connect هو نظام لإدارة عمليات الفليكسي والشحن الإلكتروني.

ليس مجرد موقع ويب، بل منصة متكاملة تتكون من:

- Laravel Backend
- Node.js Agent
- Huawei HiLink Client
- Web Dashboard
- API
- نظام إدارة مودمات متعددة
- نظام وكلاء
- نظام شحن مباشر

---

# التقنيات

Backend

- Laravel 13

Frontend

- Livewire
- Flux UI

Agent

- Node.js

Database

- MySQL

Communication

- REST API

Modems

- Huawei HiLink

---

# الهيكل العام

Laravel

↓

REST API

↓

Node Agent

↓

Huawei Client

↓

Huawei Modem

↓

SIM Card

↓

USSD / SMS

---

# ما تم إنجازه

✅ إنشاء مشروع Laravel

✅ تشغيل Node Agent

✅ نجاح الاتصال بين Laravel وAgent

✅ استخراج Device Information

✅ استخراج Session

✅ استخراج Token

✅ إنشاء modemGet()

✅ إنشاء modemPost()

✅ تشغيل USSD

---

# Huawei Client

النسخة الحالية:

V1

يعتمد على:

- Session
- Token
- XML
- fast-xml-parser

يوجد:

- modemGet()
- modemPost()
- buildUssdXml()

---

# فلسفة المشروع

لا يتم حذف الكود الذي يعمل.

لا تتم إعادة كتابة الملفات بدون سبب.

يتم التطوير تدريجياً.

كل خطوة يتم اختبارها قبل الانتقال إلى التالية.

---

# المرحلة الحالية

Huawei Client V1

---

# المرحلة القادمة

Huawei Client V2

المطلوب:

- Session Cache
- Auto Retry
- Logging
- Class Architecture

---

# الهدف النهائي

إنشاء Huawei Client احترافي يمكن استخدامه في أي مشروع Node.js.

ثم دمجه داخل TehnaPay Connect.

---

# قاعدة العمل

أي قرار هندسي جديد يتم تسجيله داخل:

docs/decisions.md

أي تقدم جديد يتم تسجيله داخل:

docs/progress.md

أي مهمة جديدة يتم تسجيلها داخل:

docs/todo.md

---

# ملاحظة

هذا الملف هو المرجع الرسمي للمشروع.

عند فتح محادثة جديدة:

اطلب من ChatGPT قراءة هذا الملف أولاً ثم متابعة التطوير.
