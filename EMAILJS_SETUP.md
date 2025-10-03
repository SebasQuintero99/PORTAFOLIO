# Configuración de EmailJS

Este proyecto usa EmailJS para enviar emails desde el formulario de contacto. Sigue estos pasos para configurarlo:

## 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (permite 200 emails/mes)
3. Verifica tu email

## 2. Configurar el servicio de email

1. En el dashboard, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de email (Gmail recomendado)
4. Sigue las instrucciones para conectar tu cuenta de Gmail
5. Copia el **Service ID** que se genera

## 3. Crear plantilla de email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa esta plantilla:

```
Asunto: Nuevo mensaje de contacto - {{subject}}

Hola {{to_name}},

Has recibido un nuevo mensaje desde tu portafolio:

De: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de contacto de tu portafolio.
```

4. Guarda la plantilla y copia el **Template ID**

## 4. Obtener la clave pública

1. Ve a **Account** > **General**
2. Encuentra tu **Public Key** (comienza con algo como "user_...")
3. Cópiala

## 5. Configurar variables de entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores con los que obtuviste:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

## 6. Reiniciar el servidor de desarrollo

```bash
npm run dev
```

## 7. Probar el formulario

1. Ve a la sección de Contacto
2. Llena el formulario y envía un mensaje de prueba
3. Deberías recibir el email en tu bandeja de entrada

## Solución de problemas

- **"Service ID is invalid"**: Verifica que copiaste correctamente el Service ID
- **"Template ID is invalid"**: Verifica que copiaste correctamente el Template ID
- **No llega el email**: Revisa la carpeta de spam
- **Error de CORS**: Asegúrate de que tu dominio esté agregado en la configuración de EmailJS

## Notas importantes

- El plan gratuito incluye 200 emails/mes
- Los emails pueden tardar hasta 1 minuto en llegar
- EmailJS tiene un límite de tamaño de 50KB por email
- Asegúrate de NO subir el archivo `.env.local` a Git (ya está en `.gitignore`)
