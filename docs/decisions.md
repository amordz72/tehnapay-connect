# Engineering Decisions

آخر تحديث: 2026-07-22

---

# Architecture Decisions

> القرارات التصميمية الأساسية للمشروع.
> Any important design decision must be documented here before implementation.



# القرار 001

العنوان:
فصل Laravel عن Huawei.

القرار:

Laravel لا يتصل بالمودم مباشرة.

يتم الاتصال عن طريق Node.js Agent فقط.

السبب:

- زيادة الأمان.
- سهولة التطوير.
- إمكانية تشغيل عدة Agents.

الحالة:

✅ معتمد.

---

# القرار 002

العنوان:

إنشاء Huawei Client مستقل.

القرار:

منع كتابة كود Huawei داخل الخدمات.

جميع أوامر Huawei توضع داخل Huawei Client.

السبب:

- إعادة الاستخدام.
- سهولة الاختبار.
- سهولة الصيانة.

الحالة:

✅ معتمد.

---

# القرار 003

العنوان:

عدم إعادة كتابة الكود العامل.

القرار:

إذا كان الكود يعمل، يتم تطويره تدريجيًا.

لا يتم حذفه وإعادة بنائه من الصفر.

السبب:

تقليل الأخطاء.

الحالة:

✅ معتمد.

---

# القرار 004

العنوان:

تطوير Huawei Client على مراحل.

المراحل:

V1

- Session
- Token
- XML
- modemGet
- modemPost

V2

- Session Cache
- Auto Retry
- Logging

V3

- Class Architecture
- Multiple Modems

الحالة:

🚧 قيد التنفيذ.

---

# القرار 005

العنوان:

توثيق المشروع.

القرار:

أي تقدم مهم يتم تسجيله داخل docs.

الحالة:

✅ معتمد.

---

# القرار 006

العنوان:

الاختبار.

القرار:

لا ننتقل إلى أي مرحلة جديدة حتى تنجح المرحلة الحالية بالكامل.

الحالة:

✅ معتمد.

---

# قواعد ثابتة

- لا نحذف كودًا يعمل.
- لا نضيف ميزات كثيرة دفعة واحدة.
- كل خطوة يتم اختبارها.
- التوثيق جزء من التطوير.
- المشروع هو المرجع، وليس المحادثة.


## Dynamic Offer Validation

> التحقق من العروض قبل تفعيلها

### Problem

Telecom operators may change their USSD menus at any time.

Possible changes include:

- Offer order.
- Menu numbering.
- Offer names.
- Recharge amount.
- USSD navigation path.
- Response format.

If the system trusts new responses automatically, it may execute the wrong recharge operation.

---

### Decision

The system must NEVER activate new or modified offers automatically.

Every detected offer must be verified before it becomes available for sale.

---

### Validation Checklist

Each offer must be verified against:

- Offer name.
- Operator.
- USSD navigation path.
- Menu order.
- Recharge amount.
- Expected modem response.

---

### Required Behavior

When an unexpected response is detected:

- Mark the offer as **Unverified**.
- Block selling the offer.
- Save the Raw Response.
- Save an event log.
- Notify the administrator.
- Wait for manual approval.

---

### Goal

Protect the recharge system from telecom USSD changes.

**Safety is always more important than automatic activation.**