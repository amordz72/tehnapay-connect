# TODO

آخر تحديث: 2026-07-22

---

# المهمة الحالية

## Huawei Client V2

الحالة:

🚧 لم تبدأ بعد

---

# المطلوب

## 1

إضافة Session Cache.

الهدف:

عدم طلب:

/api/webserver/SesTokInfo

في كل Request.

---

## 2

إذا انتهت صلاحية Session

↓

يتم إنشاء Session جديدة

↓

ثم إعادة تنفيذ الطلب تلقائياً.

---

## 3

إضافة Logger.

أمثلة:

✔ GET

✔ POST

✔ USSD

✔ SMS

✔ Error

---

## 4

تحويل Huawei Client إلى Class.

بدلاً من:

modemGet()

modemPost()

سيصبح:

const modem = new HuaweiClient();

---

## 5

اختبار جميع الوظائف بعد كل تعديل.

---

# ممنوع

❌ إعادة كتابة Huawei Client من الصفر.

❌ تعديل أكثر من ميزة في نفس الوقت.

---

# بعد انتهاء هذه المهمة

الانتقال إلى:

Multiple Modems Support.
