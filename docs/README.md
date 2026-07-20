# TehnaPay Connect

منصة لإدارة عمليات الفليكسي، البطاقات الرقمية، والوكلاء، مع دعم مودمات Huawei HiLink عن طريق Node.js Agent.

---

# الهدف

يهدف المشروع إلى إنشاء منصة احترافية تسمح بإرسال طلبات الفليكسي وإدارة البطاقات الرقمية من أي مكان، مع فصل واجهة الإدارة عن الاتصال المباشر بالمودم.

---

# التقنيات المستخدمة

- Laravel
- Livewire
- Flux UI
- MySQL
- Node.js
- Express.js
- REST API
- Huawei HiLink API

---

# هيكل المشروع

```
app/
bootstrap/
config/
database/
docs/
public/
resources/
routes/
storage/
tests/
vendor/
README.md
```

---

# الوثائق

جميع وثائق المشروع موجودة داخل مجلد:

```
docs/
```

ويحتوي على:

- AI_CONTEXT.md
- architecture.md
- decisions.md
- roadmap.md
- progress.md
- todo.md
- modem.md
- CHANGELOG.md

---

# طريقة تشغيل المشروع

## Laravel

```bash
composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

## Frontend

```bash
npm install
npm run dev
```

## Node Agent

```bash
npm install
node index.js
```

أو باستخدام PM2:

```bash
pm2 start index.js
```

---

# قواعد التطوير

- لا يتم إعادة كتابة الكود العامل.
- تطوير المشروع يكون خطوة بخطوة.
- اختبار كل ميزة قبل الانتقال إلى التالية.
- توثيق أي قرار أو تعديل داخل ملفات docs.
- فصل منطق Huawei داخل Huawei Client فقط.

---

# حالة المشروع

الحالة الحالية:

🚧 قيد التطوير

الإصدار الحالي:

Huawei Client V1

---

# المهمة الحالية

راجع الملف:

```
docs/todo.md
```

---

# سجل التعديلات

راجع الملف:

```
docs/CHANGELOG.md
```

---

# مرجع Huawei

راجع الملف:

```
docs/modem.md
```

---

# ملاحظات

قبل بدء أي جلسة تطوير:

1. اقرأ README.md.
2. اقرأ docs/progress.md.
3. اقرأ docs/todo.md.
4. ابدأ العمل من آخر نقطة تم الوصول إليها.
