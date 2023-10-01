Requerimientos Funcionales:
Objetivos de la pagina:

Proporcionar a los usuarios de la empresa Platiceros, un registro a la pagina con su debido ingreso como usuario que permita acceder a un catalogo que permita visualizar productos como plantas, insumos, materas, sustratos y cursos; adicionalmente contará  con pasarela de pagos de debito y credito a nivel internacional; y por medio del acceso como suscriptor permitir acceder a seccion de los cursos comprados (puede incluir un blog o texto junto con los videos para incluir documetacion sobre los cursos).

Registro de Usuarios:

Los usuarios deben poder registrarse en la página web proporcionando su nombre, dirección de correo electrónico y una contraseña.
Se debe crear el usuario en la base de datos y verificar la dirección de correo electrónico mediante un enlace de confirmación enviado por correo electrónico.

Inicio de Sesión:

Los usuarios registrados deben poder iniciar sesión en la página web con su correo electrónico y contraseña.
Catálogo de Productos:

La página web debe mostrar un catálogo de productos disponibles para la compra.
Cada producto debe incluir una imagen, nombre, descripción, precio y botón de "Agregar al carrito".

Carrito de Compras:

Los usuarios deben poder agregar productos al carrito de compras y ver su contenido.
Deben poder modificar la cantidad de productos en el carrito y eliminar productos.

Pasarela de Compras:

Debe existir una pasarela de pago segura que permita a los usuarios realizar compras con tarjeta de crédito o débito.
Se debe proporcionar confirmación de compra una vez que se complete una transacción.

Gestión de Suscripciones:(seccion en consideración, definir si va a ser con cuspripcion o solo compra de contenido)

Los usuarios deben poder suscribirse a la página para acceder a los videos de cursos.
La suscripción puede ser mensual o anual, con opciones de pago correspondientes.

Acceso a Videos de Cursos:

Los usuarios suscritos deben poder acceder a una sección de videos de cursos.
Los videos (consultar si puede ser un link a youtube o debe estar el video alojado en la pagina) deben estar organizados por bloques de contenido, y ser accesibles de manera fácil ademas incluir contenido escrito modo.

Bloques de contenido sugerido para los cursos: (en construccion)
        1 especies existentes
        2 morfologia de las plantas
        3 siembra 

Requerimientos No Funcionales:
Tecnologías:

La aplicación web puede desarrollarse utilizando React.js para el frontend y Node.js para el backend, analizar si es funcional utizar mongo para la BD.
Se debe utilizar TailwindCSS para garantizar un diseño responsivo y atractivo.

Seguridad:

Deben implementarse medidas de seguridad para proteger los datos de los usuarios, como el almacenamiento seguro de contraseñas y la encriptación de datos sensibles.

Rendimiento:

La página web debe ser rápida y eficiente, con tiempos de carga mínimos.
Se deben realizar pruebas de rendimiento para garantizar una experiencia fluida para los usuarios.

Disponibilidad:
Alojar la pagina en un servicio que permita paginas web dinamicas y con costos accesibles.
La página web debe estar disponible las 24 horas del día, los 7 días de la semana.
Se deben implementar medidas de alta disponibilidad para minimizar el tiempo de inactividad.

Usabilidad:

La interfaz de usuario debe ser intuitiva y fácil de usar, con una navegación clara y efectiva, debe poderse traducir a otros idiomas.
Escalabilidad:

La arquitectura de la aplicación debe ser escalable para manejar un crecimiento futuro en el número de usuarios y productos.

Cumplimiento Legal:

La aplicación debe cumplir con todas las regulaciones y leyes aplicables, especialmente en cuanto a protección de datos y comercio electrónico.
Mantenimiento:

Debe existir un plan de mantenimiento para corregir errores, aplicar actualizaciones y agregar nuevas características.