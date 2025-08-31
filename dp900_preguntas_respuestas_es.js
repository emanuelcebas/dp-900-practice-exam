
const preguntasRespuestas_es = [
  {
    "Numero": 1,
    "Pregunta": "Microsoft Power BI [...] permite a los usuarios crear documentos de diseño fijo y altamente formateados para archivado.",
    "Opciones": [
      "tablero.",
      "informe interactivo.",
      "informe paginado.",
      "suscripción."
    ],
    "Respuesta": "informe paginado.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 2,
    "Pregunta": "Las ofertas de base de datos de plataforma como servicio (PaaS) en Azure proporcionan alta disponibilidad integrada.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 3,
    "Pregunta": "Las ofertas de base de datos de PaaS en Azure proporcionan opciones de escalado de configuración.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 4,
    "Pregunta": "Las ofertas de base de datos de PaaS en Azure reducen la sobrecarga administrativa de administrar hardware.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 5,
    "Pregunta": "¿Qué escenario es un ejemplo de una carga de trabajo de transmisión?",
    "Opciones": [
      "Enviar transacciones con más de un mes de antigüedad a un archivo.",
      "Enviar transacciones diariamente desde dispositivos de punto de venta (POS).",
      "Enviar datos de telemetría desde dispositivos perimetrales.",
      "Enviar metadatos de infraestructura en la nube cada 30 minutos."
    ],
    "Respuesta": "Enviar datos de telemetría desde dispositivos perimetrales.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 6,
    "Pregunta": "El procesamiento en flujo tiene acceso a los datos más recientes recibidos o datos dentro de una ventana de tiempo móvil.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 7,
    "Pregunta": "El procesamiento por lotes debe ocurrir inmediatamente y tener latencia en el orden de segundos o milisegundos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 8,
    "Pregunta": "El procesamiento en flujo se usa para funciones de respuesta simples, agregados o cálculos como promedios móviles.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 9,
    "Pregunta": "Estás implementando una aplicación SaaS que requiere una base de datos relacional para Procesamiento de Transacciones en Línea (OLTP). ¿Qué servicio de Azure deberías usar para soportar la aplicación?",
    "Opciones": [
      "Azure Cosmos DB.",
      "Azure Synapse Analytics.",
      "Azure HCMmtghi.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure SQL Database.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 10,
    "Pregunta": "Extraer, transformar y cargar (ETL) puede reducir la transferencia de datos sensibles a sistemas de destino.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 11,
    "Pregunta": "Extraer, cargar y transformar (ELT) transforma datos utilizando un recurso de cómputo independiente del sistema de origen y del sistema de destino.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 12,
    "Pregunta": "ELT minimiza el tiempo que toma copiar grandes volúmenes de datos a sistemas de destino.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 13,
    "Pregunta": "Necesitas recomendar un servicio de almacenamiento de datos que cumpla los siguientes requisitos: acceso nativo a la API SQL. Índices configurables. ¿Qué deberías recomendar?",
    "Opciones": [
      "Azure Files.",
      "Azure Blob Storage.",
      "Azure Table Storage.",
      "Azure Cosmos DB."
    ],
    "Respuesta": "Azure Cosmos DB.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 14,
    "Pregunta": "El procesamiento por lotes puede enviar datos de salida a un almacenamiento de archivos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 15,
    "Pregunta": "El procesamiento por lotes puede enviar datos de salida a una base de datos relacional.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 16,
    "Pregunta": "El procesamiento por lotes puede enviar datos de salida a una base de datos NoSQL.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 17,
    "Pregunta": "¿Cuál es un beneficio de hospedar una base de datos en Azure SQL Managed Instance en comparación con Azure SQL Database?",
    "Opciones": [
      "Soporte nativo para consultas y transacciones entre bases de datos.",
      "Alta disponibilidad integrada.",
      "Copias de seguridad automáticas iniciadas por el sistema.",
      "Soporte para cifrado en reposo."
    ],
    "Respuesta": "Soporte nativo para consultas y transacciones entre bases de datos.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 18,
    "Pregunta": "Un equipo de desarrolladores tiene computadoras que ejecutan Windows 10 y Ubuntu Desktop. Necesitan conectarse y consultar una base de datos de Azure SQL desde esas computadoras, con características de asistencia de código como IntelliSense. ¿Qué deberían usar?",
    "Opciones": [
      "Azure Data Studio.",
      "Sqlcmd.",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Explorer."
    ],
    "Respuesta": "Azure Data Studio.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 19,
    "Pregunta": "Las cargas de trabajo por lotes [...].",
    "Opciones": [
      "procesan datos en memoria, fila por fila.",
      "recopilan y procesan datos como máximo una vez al día.",
      "procesan datos en tiempo casi real a medida que llegan.",
      "recopilan datos y luego los procesan cuando se cumple una condición."
    ],
    "Respuesta": "recopilan datos y luego los procesan cuando se cumple una condición.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 20,
    "Pregunta": "Un bloque de código que se ejecuta en una base de datos se llama [...].",
    "Opciones": [
      "un procedimiento almacenado.",
      "una tabla.",
      "una vista.",
      "un índice."
    ],
    "Respuesta": "un procedimiento almacenado.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 21,
    "Pregunta": "Relacioná los tipos de actividades con las actividades correspondientes de Azure Data Factory.",
    "Opciones": [
      "Copy: Movimiento de datos. Mapping data flow: Transformación de datos. Until: Control.",
      "Copy: Transformación de datos. Mapping data flow: Movimiento de datos. Until: Control.",
      "Copy: Movimiento de datos. Mapping data flow: Control. Until: Transformación de datos.",
      "Copy: Transformación de datos. Mapping data flow: Control. Until: Movimiento de datos."
    ],
    "Respuesta": "Copy: Movimiento de datos. Mapping data flow: Transformación de datos. Until: Control.",
    "Imagen": "question21.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 22,
    "Pregunta": "Tenés la siguiente consulta SQL. INSERT INTO dbo.Products (Prod... ProductDescription) Values (1,'Calmp',12.48,'Workbench clamp');",
    "Opciones": [
      "dbo.Products: una tabla. ProductName: una columna.",
      "dbo.Products: una tabla. ProductName: un índice.",
      "dbo.Products: un índice. ProductName: una base de datos.",
      "dbo.Products: una base de datos. ProductName: una tabla."
    ],
    "Respuesta": "dbo.Products: una tabla. ProductName: una columna.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 23,
    "Pregunta": "Los datos relacionales se almacenan en [...].",
    "Opciones": [
      "Un sistema de archivos como datos no estructurados.",
      "Una estructura de carpetas jerárquica.",
      "Una forma tabular de filas y columnas.",
      "Archivos de valores separados por comas (CSV)."
    ],
    "Respuesta": "Una forma tabular de filas y columnas.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 24,
    "Pregunta": "Un almacén de datos clave/valor está optimizado para [...].",
    "Opciones": [
      "Aplicar restricciones.",
      "Búsquedas simples.",
      "Uniones de tablas.",
      "Transacciones.."
    ],
    "Respuesta": "Búsquedas simples.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 25,
    "Pregunta": "Se puede usar Azure Data Studio para consultar una base de datos de Azure SQL desde un dispositivo que ejecuta macOS.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 26,
    "Pregunta": "Microsoft SQL Server Management Studio (SSMS) permite a los usuarios crear y usar cuadernos SQL.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 27,
    "Pregunta": "Se puede usar Azure Data Studio para restaurar una base de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 28,
    "Pregunta": "¿Qué comando deberías ejecutar?",
    "Opciones": [
      "Az scorage share create.",
      "Az scorage account creace.",
      "Az cosmosdb creace.",
      "Az scorage concainer creace."
    ],
    "Respuesta": "Az scorage concainer creace.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 29,
    "Pregunta": "¿Qué servicio de Azure deberías usar?",
    "Opciones": [
      "Azure Cosmos DB.",
      "Azure Table storage.",
      "Azure Files.",
      "Azure Blob Storage."
    ],
    "Respuesta": "Azure Cosmos DB.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 30,
    "Pregunta": "¿En qué dos niveles podés configurar el rendimiento (throughput) para una cuenta de Azure Cosmos DB?",
    "Opciones": [
      "Contenedor.",
      "Elemento.",
      "Base de datos.",
      "Partición."
    ],
    "Respuesta": [
      "Contenedor.",
      "Base de datos."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 31,
    "Pregunta": "Necesitás crear una visualización de ventas en ejecución... según la siguiente imagen. ¿Qué deberías crear en Power BI Desktop?",
    "Opciones": [
      "Un gráfico de cascada.",
      "Un gráfico de cinta",
      "Un gráfico de barras.",
      "Un árbol de descomposición."
    ],
    "Respuesta": "Un gráfico de cascada.",
    "Imagen": "question31.jpeg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 32,
    "Pregunta": "Ordena físicamente los datos en una tabla según los valores de la columna especificada [...].",
    "Opciones": [
      "Una vista.",
      "Un índice agrupado (clustered).",
      "Un procedimiento almacenado.",
      "Un índice no agrupado (nonclustered)."
    ],
    "Respuesta": "Un índice agrupado (clustered).",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 33,
    "Pregunta": "Es un objeto asociado a una tabla que ordena y almacena las filas de datos en la tabla según sus valores de clave [...].",
    "Opciones": [
      "Un índice agrupado (clustered).",
      "Una FileTable.",
      "Una clave foránea.",
      "Un procedimiento almacenado."
    ],
    "Respuesta": "Un índice agrupado (clustered).",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 34,
    "Pregunta": "Un trabajo que procesa datos de ventas una vez al día es un ejemplo de una carga de trabajo por lotes.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 35,
    "Pregunta": "Un trabajo que calcula un promedio móvil de lecturas de temperatura es un ejemplo de una carga de trabajo de streaming.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 36,
    "Pregunta": "Un trabajo que calcula el ingreso promedio por producto del último mes es un ejemplo de una carga de trabajo de streaming.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 37,
    "Pregunta": "Tenés una aplicación de aseguramiento de calidad que lee y escribe datos en un almacén de datos... ¿Qué tipo de procesamiento usa la aplicación?",
    "Opciones": [
      "Procesamiento de transacciones en línea (OLTP).",
      "Procesamiento por lotes.",
      "Procesamiento analítico en línea (OLAP).",
      "Procesamiento de flujo."
    ],
    "Respuesta": "Procesamiento de transacciones en línea (OLTP).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 38,
    "Pregunta": "Tu empresa necesita diseñar una base de datos que muestre las relaciones entre componentes en la red... ¿Qué tipo de almacén de datos deberías usar?",
    "Opciones": [
      "Clave/valor.",
      "Grafo.",
      "Documentos.",
      "Columnar."
    ],
    "Respuesta": "Grafo.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 39,
    "Pregunta": "Necesitás almacenar datos en Azure Blob Storage durante mucho tiempo y debés minimizar los costos de almacenamiento. ¿Qué nivel de almacenamiento deberías usar?",
    "Opciones": [
      "Archivo (Archive).",
      "Caliente (Hot).",
      "Frío (Cool)."
    ],
    "Respuesta": "Archivo (Archive).",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 40,
    "Pregunta": "Para configurar una cuenta de Azure Storage que admita seguridad a nivel de carpeta y manipulación atómica de directorios [...].",
    "Opciones": [
      "Habilitar el espacio de nombres jerárquico.",
      "Establecer el tipo de cuenta en BlobStorage.",
      "Establecer Rendimiento en Premium.",
      "Establecer Replicación en almacenamiento con redundancia geográfica de solo lectura (RA-GRS)."
    ],
    "Respuesta": "Habilitar el espacio de nombres jerárquico.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 41,
    "Pregunta": "Relacioná los componentes de seguridad con los escenarios apropiados.",
    "Opciones": [
      "Impedir el acceso a una base de datos de Azure SQL desde otra red... aparece como texto sin formato en una base de datos de Azure SQL: Autenticación.",
      "Impedir el acceso a una base de datos de Azure SQL desde otra red... nunca aparece como texto sin formato en una base de datos de Azure SQL: Cifrado.",
      "Impedir el acceso a una base de datos de Azure SQL desde otra red... nunca aparece como texto sin formato en una base de datos de Azure SQL: Cifrado.",
      "Impedir el acceso a una base de datos de Azure SQL desde otra red... nunca aparece como texto sin formato en una base de datos de Azure SQL: Firewall."
    ],
    "Respuesta": "Impedir el acceso a una base de datos de Azure SQL desde otra red... nunca aparece como texto sin formato en una base de datos de Azure SQL: Cifrado.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 42,
    "Pregunta": "Podés usar Azure Data Studio para consultar un clúster de big data de Microsoft SQL Server.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 43,
    "Pregunta": "Podés usar Microsoft SQL Server Management Studio (SSMS) para consultar un almacén de datos de Azure Synapse Analytics.",
    "Opciones": [
      "Sí",
      "No."
    ],
    "Respuesta": "Sí",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 44,
    "Pregunta": "Podés usar MySQL Workbench para consultar bases de datos de Azure Database for MariaDB.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 45,
    "Pregunta": "Una base de datos relacional es apropiada para escenarios que implican un alto volumen de [...].",
    "Opciones": [
      "cambios en las relaciones entre entidades.",
      "escrituras distribuidas geográficamente.",
      "escrituras transaccionales.",
      "escrituras con estructuras de datos variables."
    ],
    "Respuesta": "escrituras transaccionales.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 46,
    "Pregunta": "La API de Azure Cosmos DB se configura por separado para cada base de datos en una cuenta de Azure Cosmos DB.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 47,
    "Pregunta": "Las claves de partición se usan en Azure Cosmos DB para optimizar consultas.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 48,
    "Pregunta": "Los elementos contenidos en la misma partición lógica de Azure Cosmos DB pueden tener diferentes claves de partición.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 49,
    "Pregunta": "Necesitás recopilar datos de telemetría en tiempo real desde una aplicación móvil. ¿Qué tipo de carga de trabajo describe este escenario?",
    "Opciones": [
      "Procesamiento de transacciones en línea (OLTP).",
      "Lotes.",
      "Procesamiento masivamente paralelo (MPP).",
      "Streaming."
    ],
    "Respuesta": "Streaming.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 50,
    "Pregunta": "¿Qué instrucción deberías usar en una consulta SQL para cambiar la cantidad en inventario de Product1 a 270?",
    "Opciones": [
      "INSERT.",
      "MERGE.",
      "UPDATE.",
      "CREATE."
    ],
    "Respuesta": "UPDATE.",
    "Imagen": "question50.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 51,
    "Pregunta": "Un sistema OLTP se caracteriza por [...].",
    "Opciones": [
      "un alto número de actualizaciones pequeñas y rápidas.",
      "consultas analíticas complejas y agregaciones.",
      "procesamiento de datos en tiempo real a gran escala.",
      "soporte únicamente para datos no estructurados."
    ],
    "Respuesta": "un alto número de actualizaciones pequeñas y rápidas.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 52,
    "Pregunta": "¿Cuál es un beneficio de usar Azure Synapse Analytics sobre Azure SQL Database para cargas de trabajo analíticas?",
    "Opciones": [
      "Procesamiento masivamente paralelo (MPP).",
      "Compatibilidad con T-SQL.",
      "Alta disponibilidad integrada.",
      "Escalado automático basado en la demanda."
    ],
    "Respuesta": "Procesamiento masivamente paralelo (MPP).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 53,
    "Pregunta": "Tenés datos en un almacén de datos que incluyen tablas de hechos y tablas de dimensiones. ¿Qué tipo de esquema estás utilizando?",
    "Opciones": [
      "Esquema de estrella.",
      "Esquema de copo de nieve.",
      "Esquema jerárquico.",
      "Esquema de grafo."
    ],
    "Respuesta": "Esquema de estrella.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 54,
    "Pregunta": "Necesitás una solución que pueda analizar datos de sensores en tiempo real. ¿Qué servicio deberías usar?",
    "Opciones": [
      "Azure Stream Analytics.",
      "Azure Data Lake.",
      "Azure Synapse Analytics.",
      "Azure Blob Storage."
    ],
    "Respuesta": "Azure Stream Analytics.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 55,
    "Pregunta": "¿Cuál es el propósito principal de un índice en una tabla de base de datos?",
    "Opciones": [
      "Mejorar el rendimiento de las consultas.",
      "Restringir el acceso a los datos.",
      "Incrementar la redundancia.",
      "Eliminar duplicados automáticamente."
    ],
    "Respuesta": "Mejorar el rendimiento de las consultas.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 56,
    "Pregunta": "Azure Synapse Analytics proporciona un motor de consultas dedicado y un motor sin servidor para análisis de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 57,
    "Pregunta": "Un gráfico de Power BI que muestra datos cambiando en tiempo real a medida que se transmiten es un ejemplo de [...].",
    "Opciones": [
      "Streaming dataset.",
      "Dataset importado.",
      "Dataset enlazado.",
      "Dataset tabular."
    ],
    "Respuesta": "Streaming dataset.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 58,
    "Pregunta": "El procesamiento analítico en línea (OLAP) está optimizado para [...].",
    "Opciones": [
      "actualizaciones rápidas de registros individuales.",
      "consultas complejas y agregaciones.",
      "almacenamiento de documentos JSON.",
      "responder transacciones financieras."
    ],
    "Respuesta": "consultas complejas y agregaciones.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 59,
    "Pregunta": "Azure Cosmos DB puede replicar datos en múltiples regiones de Azure.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 60,
    "Pregunta": "¿Cuál es una característica de las bases de datos de grafos?",
    "Opciones": [
      "Representan entidades y relaciones mediante nodos y aristas.",
      "Almacenan datos en tablas con filas y columnas.",
      "Están optimizadas para operaciones de agregación.",
      "Utilizan solo SQL para consultas."
    ],
    "Respuesta": "Representan entidades y relaciones mediante nodos y aristas.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 61,
    "Pregunta": "En Power BI, un **dashboard** (tablero) puede mostrar datos en vivo de múltiples fuentes.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 62,
    "Pregunta": "El nivel de acceso **Cool** en Azure Blob Storage es ideal para [...].",
    "Opciones": [
      "Datos a los que se accede con frecuencia.",
      "Datos a los que se accede de forma esporádica.",
      "Datos que deben almacenarse solo en memoria.",
      "Datos que deben eliminarse automáticamente."
    ],
    "Respuesta": "Datos a los que se accede de forma esporádica.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 63,
    "Pregunta": "¿Cuál es una ventaja de usar Azure Data Lake Storage Gen2 sobre Azure Blob Storage estándar?",
    "Opciones": [
      "Espacio de nombres jerárquico.",
      "Menor costo por GB.",
      "Mayor redundancia geográfica.",
      "Compatibilidad exclusiva con datos relacionales."
    ],
    "Respuesta": "Espacio de nombres jerárquico.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 64,
    "Pregunta": "Los índices **no agrupados (nonclustered)** almacenan [...].",
    "Opciones": [
      "las filas de datos en el mismo orden físico que el índice.",
      "una copia parcial de los datos que hace referencia a las filas originales.",
      "datos duplicados en una tabla separada.",
      "solo claves primarias."
    ],
    "Respuesta": "una copia parcial de los datos que hace referencia a las filas originales.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 65,
    "Pregunta": "¿Qué lenguaje de consulta se usa comúnmente con bases de datos relacionales?",
    "Opciones": [
      "SQL.",
      "JavaScript.",
      "C#.",
      "Python."
    ],
    "Respuesta": "SQL.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 66,
    "Pregunta": "Azure Synapse Analytics admite integración directa con Power BI.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 67,
    "Pregunta": "Las bases de datos de documentos almacenan datos en [...].",
    "Opciones": [
      "Archivos CSV.",
      "JSON o XML.",
      "Tablas relacionales.",
      "Colas de mensajes."
    ],
    "Respuesta": "JSON o XML.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 68,
    "Pregunta": "Una consulta SELECT sin cláusula WHERE devuelve [...].",
    "Opciones": [
      "ningún resultado.",
      "todas las filas de la tabla.",
      "solo filas únicas.",
      "solo claves primarias."
    ],
    "Respuesta": "todas las filas de la tabla.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 69,
    "Pregunta": "El servicio Azure que proporciona bases de datos relacionales MySQL administradas es [...].",
    "Opciones": [
      "Azure Database for MySQL.",
      "Azure SQL Database.",
      "Azure Cosmos DB.",
      "Azure Synapse Analytics."
    ],
    "Respuesta": "Azure Database for MySQL.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 70,
    "Pregunta": "¿Cuál es un escenario típico para usar Azure Table Storage?",
    "Opciones": [
      "Almacenar grandes cantidades de datos clave/valor.",
      "Procesar transacciones financieras.",
      "Ejecutar consultas SQL complejas.",
      "Visualizar datos en Power BI."
    ],
    "Respuesta": "Almacenar grandes cantidades de datos clave/valor.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 71,
    "Pregunta": "¿Qué característica de Azure Cosmos DB permite distribuir datos automáticamente entre particiones?",
    "Opciones": [
      "Clave de partición.",
      "Índice no agrupado.",
      "Procedimiento almacenado.",
      "Consulta SQL."
    ],
    "Respuesta": "Clave de partición.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 72,
    "Pregunta": "En Power BI, ¿qué tipo de visualización es más adecuada para mostrar proporciones de un todo?",
    "Opciones": [
      "Gráfico de barras.",
      "Gráfico de pastel.",
      "Gráfico de líneas.",
      "Mapa de calor."
    ],
    "Respuesta": "Gráfico de pastel.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 73,
    "Pregunta": "¿Qué lenguaje se utiliza principalmente para consultar datos en Azure Data Explorer?",
    "Opciones": [
      "SQL.",
      "KQL (Kusto Query Language).",
      "Python.",
      "R."
    ],
    "Respuesta": "KQL (Kusto Query Language).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 74,
    "Pregunta": "Un **data warehouse** (almacén de datos) se utiliza principalmente para [...].",
    "Opciones": [
      "procesar transacciones.",
      "almacenar archivos multimedia.",
      "análisis histórico y de grandes volúmenes de datos.",
      "enviar mensajes entre aplicaciones."
    ],
    "Respuesta": "análisis histórico y de grandes volúmenes de datos.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 75,
    "Pregunta": "Azure Cosmos DB ofrece latencia baja de lectura y escritura garantizada en milisegundos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 76,
    "Pregunta": "¿Qué servicio de Azure permite ejecutar consultas SQL directamente sobre archivos almacenados en Azure Storage sin necesidad de cargarlos en una base de datos?",
    "Opciones": [
      "Azure Synapse Analytics (serverless).",
      "Azure SQL Database.",
      "Azure Cosmos DB.",
      "Azure Data Factory."
    ],
    "Respuesta": "Azure Synapse Analytics (serverless).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 77,
    "Pregunta": "La instrucción SQL usada para eliminar una tabla es [...].",
    "Opciones": [
      "DELETE.",
      "DROP.",
      "REMOVE.",
      "TRUNCATE."
    ],
    "Respuesta": "DROP.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 78,
    "Pregunta": "El servicio de Azure que proporciona un sistema de colas de mensajería es [...].",
    "Opciones": [
      "Azure Queue Storage.",
      "Azure Table Storage.",
      "Azure Cosmos DB.",
      "Azure Event Hubs."
    ],
    "Respuesta": "Azure Queue Storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 79,
    "Pregunta": "En Power BI, un modelo de datos puede incluir relaciones entre múltiples tablas.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 80,
    "Pregunta": "¿Qué característica de Azure Blob Storage permite proteger datos críticos con múltiples copias geográficas?",
    "Opciones": [
      "Redundancia geográfica (GRS/RA-GRS).",
      "Snapshots.",
      "Nivel Cool.",
      "Contenedores."
    ],
    "Respuesta": "Redundancia geográfica (GRS/RA-GRS).",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 81,
    "Pregunta": "¿Qué consulta SQL devuelve solo filas únicas?",
    "Opciones": [
      "SELECT ALL.",
      "SELECT UNIQUE.",
      "SELECT DISTINCT.",
      "SELECT ONE."
    ],
    "Respuesta": "SELECT DISTINCT.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 82,
    "Pregunta": "¿Qué servicio de Azure es más adecuado para crear pipelines ETL complejos?",
    "Opciones": [
      "Azure Data Factory.",
      "Azure Functions.",
      "Azure Blob Storage.",
      "Power BI."
    ],
    "Respuesta": "Azure Data Factory.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 83,
    "Pregunta": "En un sistema OLAP, los datos generalmente se almacenan en un modelo de [...].",
    "Opciones": [
      "tablas normalizadas.",
      "cubos multidimensionales.",
      "archivos planos.",
      "documentos JSON."
    ],
    "Respuesta": "cubos multidimensionales.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 84,
    "Pregunta": "¿Cuál es el objetivo principal de una clave primaria en una tabla relacional?",
    "Opciones": [
      "Permitir duplicados.",
      "Garantizar unicidad de registros.",
      "Mejorar el rendimiento de consultas.",
      "Definir relaciones entre bases de datos."
    ],
    "Respuesta": "Garantizar unicidad de registros.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 85,
    "Pregunta": "Azure Event Hubs se utiliza principalmente para [...].",
    "Opciones": [
      "procesar datos de sensores en tiempo real.",
      "almacenar grandes volúmenes de imágenes.",
      "ejecutar consultas sobre datos históricos.",
      "crear informes paginados."
    ],
    "Respuesta": "procesar datos de sensores en tiempo real.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 86,
    "Pregunta": "¿Qué comando de SQL se usa para agregar nuevas filas a una tabla?",
    "Opciones": [
      "ADD.",
      "INSERT.",
      "UPDATE.",
      "APPEND."
    ],
    "Respuesta": "INSERT.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 87,
    "Pregunta": "Azure Cosmos DB admite múltiples modelos de datos, incluyendo clave/valor, documento, columna y grafo.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 88,
    "Pregunta": "En Power BI, ¿qué tipo de almacenamiento es más eficiente para manejar grandes volúmenes de datos importados?",
    "Opciones": [
      "Import.",
      "DirectQuery.",
      "Live Connection.",
      "Streaming."
    ],
    "Respuesta": "Import.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 89,
    "Pregunta": "Azure SQL Database puede escalar automáticamente el rendimiento según la demanda.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 90,
    "Pregunta": "¿Qué lenguaje de consulta se usa para interactuar con bases de datos de grafos en Azure Cosmos DB?",
    "Opciones": [
      "Gremlin.",
      "SQL.",
      "KQL.",
      "Python."
    ],
    "Respuesta": "Gremlin.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 91,
    "Pregunta": "Un almacén de datos columnar está optimizado para [...].",
    "Opciones": [
      "inserciones rápidas fila por fila.",
      "consultas analíticas de grandes volúmenes de datos.",
      "almacenamiento de datos clave/valor.",
      "procesamiento de grafos."
    ],
    "Respuesta": "consultas analíticas de grandes volúmenes de datos.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 92,
    "Pregunta": "Azure Functions es un ejemplo de [...].",
    "Opciones": [
      "PaaS.",
      "IaaS.",
      "SaaS.",
      "DBaaS."
    ],
    "Respuesta": "PaaS.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 93,
    "Pregunta": "¿Qué característica de Azure Synapse Analytics permite ejecutar consultas sobre datos almacenados en Azure Data Lake sin moverlos?",
    "Opciones": [
      "Serverless SQL pool.",
      "Dedicated SQL pool.",
      "Data pipeline.",
      "Power Query."
    ],
    "Respuesta": "Serverless SQL pool.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 94,
    "Pregunta": "Un índice en una tabla relacional puede acelerar [...].",
    "Opciones": [
      "las consultas SELECT.",
      "la eliminación de la tabla.",
      "la normalización de los datos.",
      "el cifrado de columnas."
    ],
    "Respuesta": "las consultas SELECT.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 95,
    "Pregunta": "¿Cuál de los siguientes es un servicio NoSQL de Azure?",
    "Opciones": [
      "Azure Cosmos DB.",
      "Azure SQL Database.",
      "Azure Synapse Analytics.",
      "Azure Database for PostgreSQL."
    ],
    "Respuesta": "Azure Cosmos DB.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 96,
    "Pregunta": "En Power BI, ¿qué característica permite a los usuarios hacer preguntas en lenguaje natural sobre los datos?",
    "Opciones": [
      "Q&A.",
      "Drillthrough.",
      "Bookmarks.",
      "Filters."
    ],
    "Respuesta": "Q&A.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 97,
    "Pregunta": "Una base de datos orientada a documentos es más adecuada para [...].",
    "Opciones": [
      "almacenar datos en formato JSON.",
      "procesar transacciones bancarias.",
      "consultas analíticas en grandes volúmenes de datos.",
      "gráficos de relaciones sociales."
    ],
    "Respuesta": "almacenar datos en formato JSON.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 98,
    "Pregunta": "El servicio de Azure que permite recolectar, procesar y analizar datos de flujo a gran escala es [...].",
    "Opciones": [
      "Azure Event Hubs.",
      "Azure Synapse Analytics.",
      "Azure SQL Database.",
      "Azure Blob Storage."
    ],
    "Respuesta": "Azure Event Hubs.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 99,
    "Pregunta": "¿Qué comando SQL se utiliza para modificar la estructura de una tabla existente?",
    "Opciones": [
      "ALTER TABLE.",
      "UPDATE.",
      "INSERT.",
      "CREATE."
    ],
    "Respuesta": "ALTER TABLE.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 100,
    "Pregunta": "El servicio de Azure que permite crear y programar flujos de datos ETL/ELT sin escribir código es [...].",
    "Opciones": [
      "Azure Data Factory.",
      "Azure Functions.",
      "Azure Synapse Analytics.",
      "Azure Stream Analytics."
    ],
    "Respuesta": "Azure Data Factory.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 101,
    "Pregunta": "Si tenés una base de datos de plataforma como servicio (PaaS) en Azure, sos responsable de aplicar las actualizaciones del sistema operativo.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 102,
    "Pregunta": "Si tenés una base de datos de plataforma como servicio (PaaS) en Azure, las copias de seguridad se realizan automáticamente.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 103,
    "Pregunta": "Si tenés una base de datos de plataforma como servicio (PaaS) en Azure, sos responsable de actualizar el motor de la base de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 104,
    "Pregunta": "Una visualización que muestra la matrícula de estudiantes actual de una universidad frente a la capacidad máxima es un ejemplo de análisis [...].",
    "Opciones": [
      "cognitivo.",
      "descriptivo.",
      "predictivo.",
      "prescriptivo."
    ],
    "Respuesta": "descriptivo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 105,
    "Pregunta": "Relacioná los términos de Azure Data Lake Storage con los niveles apropiados en la jerarquía.",
    "Opciones": [
      "Casilla 1: Sistema de archivos. Casilla 2: Recurso compartido de archivos.",
      "Casilla 1: Cuenta de Azure Storage. Casilla 2: Sistema de archivos.",
      "Casilla 1: Recurso compartido de archivos. Casilla 2: Sistema de archivos.",
      "Casilla 1: Cuenta de Azure Storage. Casilla 2: Recurso compartido de archivos."
    ],
    "Respuesta": "Casilla 1: Cuenta de Azure Storage. Casilla 2: Recurso compartido de archivos.",
    "Imagen": "question103.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 106,
    "Pregunta": "Podés copiar un tablero entre áreas de trabajo de Microsoft Power BI.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 107,
    "Pregunta": "Un tablero de Microsoft Power BI solo puede mostrar visualizaciones de un único conjunto de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 108,
    "Pregunta": "Un tablero de Microsoft Power BI puede mostrar visualizaciones de un libro de Microsoft Excel.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 109,
    "Pregunta": "Podés consultar una base de datos de grafos en Azure Cosmos DB [...].",
    "Opciones": [
      "como un documento JSON usando un lenguaje similar a SQL.",
      "como un almacén de filas particionadas usando Cassandra Query Language (CQL).",
      "como un almacén de filas particionadas usando Language-Integrated Query (LINQ).",
      "como nodos y aristas usando el lenguaje Gremlin."
    ],
    "Respuesta": "como un documento JSON usando un lenguaje similar a SQL.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 110,
    "Pregunta": "¿En qué nivel de Azure Cosmos DB podés configurar múltiples regiones de escritura y lectura?",
    "Opciones": [
      "base de datos.",
      "partición.",
      "colección.",
      "cuenta."
    ],
    "Respuesta": "colección.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 111,
    "Pregunta": "Extraer, Transformar y Cargar (ETL).",
    "Opciones": [
      "Azure Analysis Services.",
      "Azure Data Factory.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Synapse Analytics."
    ],
    "Respuesta": "Azure Data Factory.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 112,
    "Pregunta": "Almacén de datos.",
    "Opciones": [
      "Azure Analysis Services.",
      "Azure Data Factory.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Synapse Analytics."
    ],
    "Respuesta": "Azure Synapse Analytics.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 113,
    "Pregunta": "¿Qué solución de almacenamiento admite el control de acceso basado en roles (RBAC) a nivel de archivo y carpeta?",
    "Opciones": [
      "Azure Disk Storage.",
      "Azure Data Lake Storage.",
      "Azure Blob storage.",
      "Azure Queue storage."
    ],
    "Respuesta": "Azure Data Lake Storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 114,
    "Pregunta": "¿Qué deberías usar en Microsoft Power BI?",
    "Opciones": [
      "Un tablero.",
      "Microsoft Power Apps.",
      "Un flujo de datos.",
      "Un informe."
    ],
    "Respuesta": "Un informe.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 115,
    "Pregunta": "El motor de procesamiento masivamente paralelo (MPP) de Azure Synapse Analytics [...].",
    "Opciones": [
      "distribuye el procesamiento entre los nodos de cómputo.",
      "distribuye el procesamiento entre los nodos de control.",
      "redirige las conexiones de los clientes a través de los nodos de cómputo.",
      "redirige las conexiones de los clientes a través de los nodos de control."
    ],
    "Respuesta": "distribuye el procesamiento entre los nodos de cómputo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 116,
    "Pregunta": "Un proceso de extracción, transformación y carga (ETL) requiere [...].",
    "Opciones": [
      "un esquema coincidente en el origen y el destino de los datos.",
      "un almacén de datos de destino lo suficientemente potente como para transformar los datos.",
      "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino.",
      "que el destino de los datos sea una base de datos relacional."
    ],
    "Respuesta": "un almacén de datos de destino lo suficientemente potente como para transformar los datos.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 117,
    "Pregunta": "¿Qué dos servicios de Azure se pueden usar para aprovisionar clústeres de Apache Spark?",
    "Opciones": [
      "Azure Time Series Insights.",
      "Azure HDInsight.",
      "Azure Databricks.",
      "Azure Log Analytics."
    ],
    "Respuesta": [
      "Azure HDInsight.",
      "Azure Databricks."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 118,
    "Pregunta": "Administrás una aplicación que almacena datos en una carpeta compartida en un servidor de Windows. Necesitás mover la carpeta compartida a Azure Storage. ¿Qué tipo de Azure Storage deberías usar?",
    "Opciones": [
      "Cola.",
      "Blob.",
      "Archivo.",
      "Tabla."
    ],
    "Respuesta": "Archivo.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 119,
    "Pregunta": "Al aprovisionar una cuenta de Azure Cosmos DB, ¿qué característica proporciona redundancia dentro de una región de Azure?",
    "Opciones": [
      "Replicación multimaestro.",
      "Zonas de disponibilidad.",
      "Conmutación por error automática.",
      "El nivel de coherencia fuerte."
    ],
    "Respuesta": "Zonas de disponibilidad.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 120,
    "Pregunta": "¿Qué cláusula deberías usar en una instrucción SELECT para combinar filas de una tabla con filas de otra tabla?",
    "Opciones": [
      "JOIN.",
      "VALUES.",
      "SET.",
      "KEY."
    ],
    "Respuesta": "JOIN.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 121,
    "Pregunta": "¿Qué deberías usar para crear un informe paginado de Microsoft Power BI?",
    "Opciones": [
      "Power BI Report Builder.",
      "Power BI Desktop.",
      "Charticulator.",
      "El servicio Power BI."
    ],
    "Respuesta": "Power BI Report Builder.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 122,
    "Pregunta": "Necesitás modificar una vista en una base de datos relacional agregando una nueva columna. ¿Qué instrucción deberías usar?",
    "Opciones": [
      "MERGE.",
      "ALTER.",
      "INSERT.",
      "UPDATE."
    ],
    "Respuesta": "ALTER.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 123,
    "Pregunta": "El Cifrado de Datos Transparente (TDE) cifra [...].",
    "Opciones": [
      "una columna para proteger los datos en reposo y en tránsito.",
      "consultas y sus resultados para proteger los datos en tránsito.",
      "la base de datos para proteger los datos en reposo.",
      "el servidor para proteger los datos en reposo."
    ],
    "Respuesta": "la base de datos para proteger los datos en reposo.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 124,
    "Pregunta": "Transcribir archivos de audio es un ejemplo de análisis [...].",
    "Opciones": [
      "Cognitivo.",
      "Descriptivo.",
      "Predictivo.",
      "Prescriptivo."
    ],
    "Respuesta": "Cognitivo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 125,
    "Pregunta": "Tu empresa está diseñando una base de datos que contendrá datos de sesión para un sitio web. Los datos incluirán notificaciones, atributos de personalización y productos que se agregan a un carrito de compras. ¿Qué tipo de almacén de datos proporcionará la latencia más baja para recuperar los datos?",
    "Opciones": [
      "clave/valor.",
      "grafo.",
      "columnar.",
      "documento."
    ],
    "Respuesta": "clave/valor.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 126,
    "Pregunta": "¿Qué dos servicios de Azure se pueden usar para aprovisionar clústeres de Spark?",
    "Opciones": [
      "Azure Databricks.",
      "Azure Log Analytics.",
      "Azure Time Series Insights.",
      "Azure HDinsight."
    ],
    "Respuesta": "Azure Databricks.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 127,
    "Pregunta": "Necesitás recomendar un almacén de datos no relacional que esté optimizado para almacenar y recuperar archivos, videos, transmisiones de audio e imágenes de disco virtual. El almacén de datos debe almacenar datos, algunos metadatos y una identificación única para cada archivo. ¿Qué deberían usar los desarrolladores?",
    "Opciones": [
      "Azure Data Studio.",
      "sq1cmd.",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Explorer."
    ],
    "Respuesta": "Azure Data Studio.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 128,
    "Pregunta": "Necesitás recomendar un almacén de datos no relacional que esté optimizado para almacenar y recuperar archivos, videos, transmisiones de audio e imágenes de disco virtual. El almacén de datos debe almacenar datos, algunos metadatos y una identificación única para cada archivo. ¿Qué tipo de almacén de datos deberías recomendar?",
    "Opciones": [
      "documento.",
      "clave/valor.",
      "objeto.",
      "columnar."
    ],
    "Respuesta": "objeto.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 129,
    "Pregunta": "Relacioná las API de Azure Cosmos DB con las estructuras de datos apropiadas.",
    "Opciones": [
      "Datos de grafo: API de Cassandra. Documentos JSON: API de tabla. Datos clave/valor: API de MongoDB.",
      "Datos de grafo: API de Gremlin. Documentos JSON: API de MongoDB. Datos clave/valor: API de tabla.",
      "Datos de grafo: API de tabla. Documentos JSON: API de Gremlin. Datos clave/valor: API de Cassandra.",
      "Datos de grafo: API de Gremlin. Documentos JSON: API de MongoDB. Datos clave/valor: API de tabla."
    ],
    "Respuesta": "Datos de grafo: API de Gremlin. Documentos JSON: API de MongoDB. Datos clave/valor: API de tabla.",
    "Imagen": "question127.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 130,
    "Pregunta": "Tu empresa necesita diseñar una base de datos que ilustre las relaciones entre los niveles de utilización de dispositivos de red individuales en una red de área local. ¿Qué tipo de almacén de datos deberías usar?",
    "Opciones": [
      "grafo.",
      "clave/valor.",
      "documento.",
      "columnar."
    ],
    "Respuesta": "clave/valor.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 131,
    "Pregunta": "¿Qué tipo de almacén de datos deberías recomendar?",
    "Opciones": [
      "Documento.",
      "Clave/valor.",
      "Objeto.",
      "Columnar."
    ],
    "Respuesta": "Objeto.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 132,
    "Pregunta": "Al ingerir datos de Azure Data Lake Storage entre regiones de Azure, incurrirás en costos de ancho de banda.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 133,
    "Pregunta": "Podés usar almacenamiento de blobs, tablas y archivos en la misma cuenta de Azure Storage.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 134,
    "Pregunta": "Implementas Azure Data Lake Storage creando una cuenta de Azure Storage.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 135,
    "Pregunta": "Tenés una base de datos de Azure SQL a la que accedés directamente desde Internet. Cambiaste recientemente tu dirección IP externa. Después de cambiar la dirección IP, ya no podés acceder a la base de datos. Podés conectarte a otros recursos en Azure. ¿Cuál es una posible causa del problema?",
    "Opciones": [
      "Un firewall a nivel de base de datos.",
      "Control de acceso basado en roles (RSAC).",
      "Protocolo de configuración dinámica de host (DHCP).",
      "Servicio de nombres de dominio (DNS)."
    ],
    "Respuesta": "Un firewall a nivel de base de datos.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 136,
    "Pregunta": "Una canalización es una representación de una estructura de datos dentro de Azure Data Factory.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 137,
    "Pregunta": "Las canalizaciones de Azure Data Factory pueden ejecutar otras canalizaciones.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 138,
    "Pregunta": "Un paso de procesamiento dentro de una canalización de Azure Data Factory es una actividad.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 139,
    "Pregunta": "Un gráfico de barras que muestra las ventas del año hasta la fecha por región es un ejemplo de qué tipo de análisis?",
    "Opciones": [
      "Descriptivo.",
      "Diagnóstico.",
      "Predictivo.",
      "Prescriptivo."
    ],
    "Respuesta": "Diagnóstico.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 140,
    "Pregunta": "Azure Databricks puede consumir datos de Azure SQL Database.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 141,
    "Pregunta": "Azure Databricks puede consumir datos de Azure Event Hubs.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 142,
    "Pregunta": "Azure Databricks puede consumir datos de Azure Cosmos DB.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 143,
    "Pregunta": "¿Qué componente de Azure Data Factory inicia la ejecución de una canalización?",
    "Opciones": [
      "Un flujo de control.",
      "Un desencadenador.",
      "Un parámetro.",
      "Una actividad."
    ],
    "Respuesta": "Un desencadenador.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 144,
    "Pregunta": "Las tablas de las bases de datos relacionales contienen columnas y filas.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 145,
    "Pregunta": "Los índices de una base de datos relacional describen los tipos de datos de una tabla.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 146,
    "Pregunta": "Una vista de base de datos es una tabla virtual cuyo contenido se define mediante una consulta.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 147,
    "Pregunta": "¿Qué tres requisitos se deben cumplir para consultar la tabla desde Internet?",
    "Opciones": [
      "Debes tener asignado el rol de Lector para el grupo de recursos que contiene la base de datos.",
      "Debes tener acceso SELECT a la tabla Products.",
      "Debes tener un usuario en la base de datos.",
      "Debes tener asignado el rol de Colaborador para el grupo de recursos que contiene la base de datos.",
      "Tu dirección IP debe tener permiso para conectarse a la base de datos."
    ],
    "Respuesta": [
      "Debes tener acceso SELECT a la tabla Products.",
      "Debes tener un usuario en la base de datos.",
      "Tu dirección IP debe tener permiso para conectarse a la base de datos."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 148,
    "Pregunta": "¿Cuándo podés usar una plantilla de Azure Resource Manager?",
    "Opciones": [
      "Para automatizar la creación de un grupo interdependiente de recursos de Azure de forma repetible.",
      "Para automatizar la creación de un interdependiente y que el desarrollador pueda implementar desde el portal de Azure.",
      "Para aprovisionar suscripciones de Azure y aplicar directivas para implementaciones multiinquilino.",
      "Para establecer permisos complejos automáticamente en objetos existentes en una suscripción de Azure."
    ],
    "Respuesta": "Para automatizar la creación de un grupo interdependiente de recursos de Azure de forma repetible.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 149,
    "Pregunta": "¿Qué tres objetos se pueden agregar a un tablero de Microsoft Power BI?",
    "Opciones": [
      "Una página de informe.",
      "Una diapositiva de Microsoft PowerPoint.",
      "Una visualización de un informe.",
      "Un flujo de datos.",
      "Un cuadro de texto."
    ],
    "Respuesta": [
      "Una página de informe.",
      "Una visualización de un informe.",
      "Un cuadro de texto."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 150,
    "Pregunta": "¿Qué dos actividades se pueden realizar por completo utilizando el servicio Microsoft Power BI?",
    "Opciones": [
      "Creación de informes y tableros.",
      "Uso compartido y distribución de informes.",
      "Modelado de datos.",
      "Adquisición y preparación de datos."
    ],
    "Respuesta": [
      "Creación de informes y tableros.",
      "Adquisición y preparación de datos."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 151,
    "Pregunta": "Al usar la API de Gremlin de Azure Cosmos DB, el tipo de recurso de contenedor se proyecta como un [...].",
    "Opciones": [
      "grafo.",
      "tabla.",
      "clave de partición.",
      "documento."
    ],
    "Respuesta": "grafo.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 152,
    "Pregunta": "Estás revisando el modelo de datos que se muestra en la siguiente exhibición. Usá los menús desplegables para seleccionar la opción de respuesta que completa cada declaración según la información presentada en el gráfico. El modelo de datos es un [...].",
    "Opciones": [
      "modelo transaccional.",
      "esquema de estrella.",
      "esquema de copo de nieve."
    ],
    "Respuesta": "esquema de copo de nieve.",
    "Imagen": "question150_151_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 153,
    "Pregunta": "Estás revisando el modelo de datos que se muestra en la siguiente exhibición. Usá los menús desplegables para seleccionar la opción de respuesta que completa cada declaración según la información presentada en el gráfico. Cliente es una tabla de [...].",
    "Opciones": [
      "hechos.",
      "dimensión.",
      "puente."
    ],
    "Respuesta": "dimensión.",
    "Imagen": "question150_151_1.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 154,
    "Pregunta": "Un gráfico de barras que muestra las ventas del año hasta la fecha por región es un ejemplo de qué tipo de análisis?",
    "Opciones": [
      "descriptivo.",
      "diagnóstico.",
      "predictivo.",
      "prescriptivo."
    ],
    "Respuesta": "diagnóstico.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 155,
    "Pregunta": "Relacioná los tipos de cargas de trabajo con el escenario apropiado.",
    "Opciones": [
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Micro-lote.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Micro-lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Lote.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Micro-lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Lote.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Micro-lote. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Streaming."
    ],
    "Respuesta": "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Micro-lote.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 156,
    "Pregunta": "Tu empresa planea cargar datos de un sistema de gestión de relaciones con el cliente (CRM) a un almacén de datos mediante un proceso de extracción, carga y transformación (ELT). ¿Dónde se produce el procesamiento de datos para cada etapa del proceso ELT?",
    "Opciones": [
      "Extracción: El almacén de datos. Carga: Una herramienta de integración de datos en memoria. Transformación: El sistema CRM.",
      "Extracción: El almacén de datos. Carga: El sistema CRM. Transformación: Una herramienta de integración de datos en memoria.",
      "Extracción: El sistema CRM. Carga: El almacén de datos. Transformación: Una herramienta de integración de datos en memoria.",
      "Extracción: El sistema CRM. Carga: Una herramienta de integración de datos en memoria. Transformación: El almacén de datos."
    ],
    "Respuesta": "Extracción: El sistema CRM. Carga: El almacén de datos. Transformación: Una herramienta de integración de datos en memoria.",
    "Imagen": "question153.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 157,
    "Pregunta": "Tenés una consulta SQL que combina datos de clientes y datos de pedidos. La consulta incluye columnas calculadas. Necesitás conservar la consulta SQL para que otros usuarios puedan usarla. ¿Qué deberías crear?",
    "Opciones": [
      "una tabla.",
      "un índice.",
      "una función escalar.",
      "una vista."
    ],
    "Respuesta": "un índice.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 158,
    "Pregunta": "Tu empresa está diseñando un almacén de datos para sensores de temperatura conectados a Internet. Los datos recopilados se utilizarán para analizar las tendencias de temperatura. ¿Qué tipo de almacén de datos deberías usar?",
    "Opciones": [
      "relacional.",
      "columnar.",
      "grafo.",
      "serie de tiempo."
    ],
    "Respuesta": "serie de tiempo.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 159,
    "Pregunta": "En Azure Data Factory, podés usar [...] para orquestar actividades de canalización que dependen de la salida de otras actividades de canalización.",
    "Opciones": [
      "un flujo de control.",
      "un conjunto de datos.",
      "un servicio vinculado.",
      "un tiempo de ejecución de integración."
    ],
    "Respuesta": "un flujo de control.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 160,
    "Pregunta": "Relacioná los servicios de Azure con las ubicaciones apropiadas en la arquitectura.",
    "Opciones": [
      "Extracción, Transformación y Carga (ETL): Azure Data Factory. Almacén de datos: Azure Cosmos DB.",
      "Extracción, Transformación y Carga (ETL): Azure Table storage. Almacén de datos: Azure Cosmos DB.",
      "Extracción, Transformación y Carga (ETL): Azure Data Factory. Almacén de datos: Azure Synapse Analytics.",
      "Extracción, Transformación y Carga (ETL): Azure Synapse Analytics. Almacén de datos: Azure Table storage."
    ],
    "Respuesta": "Extracción, Transformación y Carga (ETL): Azure Data Factory. Almacén de datos: Azure Synapse Analytics.",
    "Imagen": "question157.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 161,
    "Pregunta": "¿Cuál es un beneficio de la API de tabla de Azure Cosmos DB en comparación con Azure Table storage?",
    "Opciones": [
      "Admite particionamiento.",
      "Proporciona resistencia si una región de Azure falla.",
      "Proporciona una mayor capacidad de almacenamiento.",
      "Admite un modelo multimaestro."
    ],
    "Respuesta": "Admite un modelo multimaestro.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 162,
    "Pregunta": "¿Qué instrucción es un ejemplo de Lenguaje de Manipulación de Datos (DML)?",
    "Opciones": [
      "INSERT.",
      "DISABLE.",
      "ALTER.",
      "DROP."
    ],
    "Respuesta": "INSERT.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 163,
    "Pregunta": "Un proceso de extracción, transformación y carga (ETL) requiere [...].",
    "Opciones": [
      "un esquema coincidente en el origen y el destino de los datos.",
      "un almacén de datos de destino lo suficientemente potente como para transformar los datos.",
      "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino.",
      "que el destino de los datos sea una base de datos relacional."
    ],
    "Respuesta": "que el destino de los datos sea una base de datos relacional.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 164,
    "Pregunta": "Los datos relacionales se almacenan en [...].",
    "Opciones": [
      "Un sistema de archivos como datos no estructurados.",
      "Una estructura de carpetas jerárquica.",
      "Una forma tabular de filas y columnas.",
      "Archivos de valores separados por comas (CSV)."
    ],
    "Respuesta": "Una estructura de carpetas jerárquica.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 165,
    "Pregunta": "Cuando creas una base de datos de Azure SQL, ¿qué cuenta siempre puede conectarse a la base de datos?",
    "Opciones": [
      "La cuenta de Azure Active Directory (Azure AD) que creó la base de datos.",
      "La cuenta de administrador de Azure Active Directory (Azure AD).",
      "La cuenta sa.",
      "La cuenta de inicio de sesión del administrador del servidor del servidor lógico."
    ],
    "Respuesta": "La cuenta de inicio de sesión del administrador del servidor del servidor lógico.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 166,
    "Pregunta": "El análisis descriptivo te dice [...].",
    "Opciones": [
      "Qué es más probable que ocurra en el futuro.",
      "Qué ocurrió en el pasado.",
      "Qué acciones podés realizar para afectar los resultados.",
      "Por qué algo ocurrió en el pasado."
    ],
    "Respuesta": "Qué ocurrió en el pasado.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 167,
    "Pregunta": "Tenés una aplicación transaccional que almacena datos en una instancia administrada de Azure SQL. ¿Cuándo deberías implementar una réplica de base de datos de solo lectura?",
    "Opciones": [
      "Necesitás generar informes sin afectar la carga de trabajo transaccional.",
      "Necesitás auditar la aplicación transaccional.",
      "Necesitás implementar alta disponibilidad en caso de una interrupción regional.",
      "Necesitás mejorar el objetivo de punto de recuperación (RPO)."
    ],
    "Respuesta": "Necesitás generar informes sin afectar la carga de trabajo transaccional.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 168,
    "Pregunta": "Los datos relacionales usan [...] para hacer cumplir las relaciones entre diferentes tablas.",
    "Opciones": [
      "colecciones.",
      "columnas.",
      "claves.",
      "particiones."
    ],
    "Respuesta": "claves.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 169,
    "Pregunta": "Un proceso de extracción, carga y transformación (ELT) requiere [...]",
    "Opciones": [
      "una canalización de datos que incluya un motor de transformación.",
      "un motor de transformación separado.",
      "un almacén de datos de destino lo suficientemente potente como para transformar los datos.",
      "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino."
    ],
    "Respuesta": "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 170,
    "Pregunta": "Relacioná los servicios de Azure con los requisitos apropiados. [...] Salida de datos a formato Parquet.",
    "Opciones": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure Data Factory.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 171,
    "Pregunta": "Relacioná los servicios de Azure con los requisitos apropiados. [...] Almacenar datos que están en formato Parquet.",
    "Opciones": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure Data Lake Storage.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 172,
    "Pregunta": "Relacioná los servicios de Azure con los requisitos apropiados. [...] Persistir una representación tabular de datos que se almacena en formato Parquet.",
    "Opciones": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure Synapse Analytics.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 173,
    "Pregunta": "El motor de procesamiento masivamente paralelo (MPP) de Azure Synapse Analytics [...].",
    "Opciones": [
      "distribuye el procesamiento entre los nodos de cómputo.",
      "distribuye el procesamiento entre los nodos de control.",
      "redirige las conexiones de los clientes a través de los nodos de cómputo.",
      "redirige las conexiones de los clientes a través de los nodos de control."
    ],
    "Respuesta": "redirige las conexiones de los clientes a través de los nodos de cómputo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 174,
    "Pregunta": "La normalización implica eliminar las relaciones entre las tablas de la base de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 175,
    "Pregunta": "La normalización de una base de datos reduce la redundancia de datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 176,
    "Pregunta": "La normalización mejora la integridad de los datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 177,
    "Pregunta": "¿Qué dos tipos de réplica podés usar para la cuenta de almacenamiento?",
    "Opciones": [
      "Almacenamiento con redundancia geográfica de solo lectura (RA_GRS).",
      "Almacenamiento con redundancia de zona (ZRS).",
      "Almacenamiento con redundancia geográfica (GRS).",
      "Almacenamiento con redundancia local (LRS)."
    ],
    "Respuesta": [
      "Almacenamiento con redundancia geográfica de solo lectura (RA_GRS).",
      "Almacenamiento con redundancia geográfica (GRS)."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 178,
    "Pregunta": "Tu empresa tiene una solución de informes que tiene informes paginados. Los informes consultan un modelo dimensional en un almacén de datos. ¿Qué tipo de procesamiento utiliza la solución de informes?",
    "Opciones": [
      "Procesamiento de secuencias.",
      "Procesamiento de transacciones en línea (OLTP).",
      "Procesamiento por lotes.",
      "Procesamiento analítico en línea (OLAP)."
    ],
    "Respuesta": "Procesamiento analítico en línea (OLAP).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 179,
    "Pregunta": "Relacioná los tipos de cargas de trabajo con el escenario apropiado. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones.",
    "Opciones": [
      "Lote.",
      "Streaming."
    ],
    "Respuesta": "Lote.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 180,
    "Pregunta": "¿Cuáles son dos características del procesamiento de datos en tiempo real?",
    "Opciones": [
      "Los datos se procesan a medida que se crean.",
      "Se espera una baja latencia.",
      "La alta latencia es aceptable.",
      "Los datos se procesan periódicamente."
    ],
    "Respuesta": [
      "Los datos se procesan a medida que se crean.",
      "Se espera una baja latencia."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 181,
    "Pregunta": "Las ofertas de bases de datos de plataforma como servicio (PaaS) en Azure brindan a los administradores la capacidad de controlar y actualizar la versión del sistema operativo [...].",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 182,
    "Pregunta": "Todas las ofertas de bases de datos de plataforma como servicio (PaaS) en Azure se pueden pausar para reducir costos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 183,
    "Pregunta": "Una herramienta gráfica para administrar bases de datos de Azure SQL y ver planes de ejecución de SQL.",
    "Opciones": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "Respuesta": "Microsoft SQL Server Management Studio (SSMS).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 184,
    "Pregunta": "Una extensión de Microsoft SQL Server que admite conexiones a SQL Server y proporciona una experiencia de edición enriquecida para T-SQL.",
    "Opciones": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "Respuesta": "Microsoft Visual Studio Code.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 185,
    "Pregunta": "Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel.",
    "Opciones": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "Respuesta": "Azure Data Studio.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 186,
    "Pregunta": "Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS).",
    "Opciones": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "Respuesta": "Microsoft SQL Server Data Tools (SSDT).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 187,
    "Pregunta": "Tu empresa está diseñando una aplicación que escribirá un gran volumen de datos JSON y tendrá un esquema definido por la aplicación. ¿Qué tipo de almacén de datos deberías usar?",
    "Opciones": [
      "Clave/valor.",
      "Documento.",
      "Grafo.",
      "Columnar."
    ],
    "Respuesta": "Clave/valor.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 188,
    "Pregunta": "Tu empresa planea cargar datos de un sistema de gestión de relaciones con el cliente (CRM) a un almacén de datos mediante un proceso de extracción, carga y transformación (ELT). ¿Dónde se produce el procesamiento de datos para cada etapa del proceso ELT?",
    "Opciones": [
      "Extracción: El almacén de datos. Carga: Una herramienta de análisis de datos independiente. Transformación: El sistema CRM.",
      "Extracción: El almacén de datos. Carga: El sistema CRM. Transformación: Una herramienta de análisis de datos independiente.",
      "Extracción: El sistema CRM. Carga: El almacén de datos. Transformación: Una herramienta de análisis de datos independiente.",
      "Extracción: El sistema CRM. Carga: Una herramienta de análisis de datos independiente. Transformación: El almacén de datos."
    ],
    "Respuesta": "Extracción: El sistema CRM. Carga: El almacén de datos. Transformación: Una herramienta de análisis de datos independiente.",
    "Imagen": "question185.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 189,
    "Pregunta": "Tenés una tabla llamada Sales que contiene los siguientes datos. Necesitás consultar la tabla para devolver el monto promedio de ventas por día. La salida debe producir los siguientes resultados. ¿Cómo deberías completar la consulta?",
    "Opciones": [
      "CREATE.",
      "GROUP BY.",
      "ORDER BY.",
      "SELECT."
    ],
    "Respuesta": [
      "GROUP BY.",
      "SELECT."
    ],
    "Imagen": "question186_1.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 190,
    "Pregunta": "¿Cuáles son dos usos de la visualización de datos?",
    "Opciones": [
      "Representar tendencias y patrones a lo largo del tiempo.",
      "Comunicar la importancia de los datos.",
      "Implementar el aprendizaje automático para predecir valores futuros.",
      "Implementar de forma coherente la lógica de negocio en los informes."
    ],
    "Respuesta": [
      "Representar tendencias y patrones a lo largo del tiempo.",
      "Implementar el aprendizaje automático para predecir valores futuros."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 191,
    "Pregunta": "¿Qué dos servicios de Azure se pueden usar para aprovisionar clústeres de Spark?",
    "Opciones": [
      "Azure Databricks.",
      "Azure Log Analytics.",
      "Azure Time Series Insights.",
      "Azure HDinsight."
    ],
    "Respuesta": [
      "Azure Databricks.",
      "Azure HDinsight."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 192,
    "Pregunta": "Para configurar una cuenta de Azure Storage para admitir tanto la seguridad a nivel de carpeta como la manipulación atómica de directorios [...].",
    "Opciones": [
      "Habilitar el espacio de nombres jerárquico.",
      "Establecer el tipo de cuenta en BlobStorage.",
      "Establecer el rendimiento en Premium.",
      "Establecer la replicación en almacenamiento con redundancia geográfica de solo lectura (RA-GRS)."
    ],
    "Respuesta": "Establecer el tipo de cuenta en BlobStorage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 193,
    "Pregunta": "Relacioná los tipos de datos con los servicios de datos de Azure apropiados. Para responder, arrastrá los tipos de datos apropiados de la columna de la izquierda a su servicio a la derecha. Cada tipo de dato se puede usar una vez, más de una vez o ninguna. NOTA: Cada coincidencia correcta vale un punto.",
    "Opciones": [
      "Casilla 1: Archivos de imagen, Casilla 2: API de Gremlin de Azure Cosmos DB, Casilla 3: Pares clave-valor.",
      "Casilla 1: Gremlin de Azure Cosmos DB, Casilla 2: Archivos de imagen, Casilla 3: Pares clave-valor.",
      "Casilla 1: Pares clave-valor, Casilla 2: Archivos de imagen, Casilla 3: Gremlin de Azure Cosmos DB."
    ],
    "Respuesta": "Casilla 1: Archivos de imagen, Casilla 2: API de Gremlin de Azure Cosmos DB, Casilla 3: Pares clave-valor.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 194,
    "Pregunta": "¿Cuáles son dos beneficios de las ofertas de bases de datos relacionales de plataforma como servicio (PaaS) en Azure, como Azure SQL Database?",
    "Opciones": [
      "Control total sobre los procesos de copia de seguridad y restauración.",
      "Acceso a las últimas funciones.",
      "Servicios de aprendizaje automático en la base de datos.",
      "Reducción del esfuerzo administrativo para administrar la infraestructura del servidor."
    ],
    "Respuesta": [
      "Acceso a las últimas funciones.",
      "Servicios de aprendizaje automático en la base de datos."
    ],
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 195,
    "Pregunta": "Azure Synapse Analytics escala el almacenamiento y el cómputo de forma independiente.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 196,
    "Pregunta": "Azure Synapse Analytics se puede pausar para reducir los costos de cómputo.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 197,
    "Pregunta": "Un almacén de datos de Azure Synapse Analytics tiene una capacidad de almacenamiento fija.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 198,
    "Pregunta": "En el procesamiento por lotes [...].",
    "Opciones": [
      "los datos siempre se insertan una fila a la vez.",
      "los datos se procesan en tiempo real.",
      "se espera latencia.",
      "el procesamiento solo se puede ejecutar en serie."
    ],
    "Respuesta": "se espera latencia.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 199,
    "Pregunta": "Tu empresa necesita asegurarse de que una máquina virtual de Azure pueda conectarse a las bases de datos de Azure SQL sin exponer las bases de datos a Internet. ¿Qué deberías usar?",
    "Opciones": [
      "Azure DNS.",
      "Azure Application Gateway.",
      "Azure Private Link.",
      "Azure Traffic Manager."
    ],
    "Respuesta": "Azure Private Link.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 200,
    "Pregunta": "Tenés una consulta SQL que combina datos de clientes y datos de pedidos. La consulta incluye columnas calculadas. Necesitás conservar la consulta SQL para que otros usuarios puedan usarla. ¿Qué deberías crear?",
    "Opciones": [
      "una tabla.",
      "un índice.",
      "una función escalar.",
      "una vista."
    ],
    "Respuesta": "una vista.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 201,
    "Pregunta": "Se debe usar una base de datos relacional cuando [...].",
    "Opciones": [
      "se requiere un esquema dinámico.",
      "los datos se almacenarán como pares clave/valor.",
      "se almacenan imágenes y videos grandes.",
      "se requieren garantías de coherencia sólidas."
    ],
    "Respuesta": "se requieren garantías de coherencia sólidas.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 202,
    "Pregunta": "Tenés el siguiente documento JSON. Usá los menús desplegables para seleccionar la opción de respuesta que completa cada declaración según la información presentada en el documento JSON. Cliente es [...].",
    "Opciones": [
      "una matriz anidada.",
      "un objeto anidado.",
      "un objeto raíz."
    ],
    "Respuesta": "un objeto raíz.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 203,
    "Pregunta": "Tenés el siguiente documento JSON. Usá los menús desplegables para seleccionar la opción de respuesta que completa cada declaración según la información presentada en el documento JSON. Dirección es [...].",
    "Opciones": [
      "una matriz anidada.",
      "un objeto anidado.",
      "un objeto raíz."
    ],
    "Respuesta": "un objeto anidado.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 204,
    "Pregunta": "Tenés el siguiente documento JSON. Usá los menús desplegables para seleccionar la opción de respuesta que completa cada declaración según la información presentada en el documento JSON. Redes sociales es [...].",
    "Opciones": [
      "una matriz anidada.",
      "un objeto anidado.",
      "un objeto raíz."
    ],
    "Respuesta": "una matriz anidada.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 205,
    "Pregunta": "Las ofertas de bases de datos de plataforma como servicio (PaaS) en Azure requieren menos esfuerzo de configuración que las ofertas de bases de datos de infraestructura como servicio (IaaS).",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 206,
    "Pregunta": "Las ofertas de bases de datos de plataforma como servicio (PaaS) en Azure brindan a los administradores la capacidad de controlar y actualizar la versión del sistema operativo.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 207,
    "Pregunta": "Todas las ofertas de bases de datos de plataforma como servicio (PaaS) en Azure se pueden pausar para reducir costos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 208,
    "Pregunta": "Tenés una aplicación de comercio electrónico que lee y escribe datos en una base de datos de Azure SQL. ¿Qué tipo de procesamiento utiliza la aplicación?",
    "Opciones": [
      "procesamiento de secuencias.",
      "procesamiento por lotes.",
      "Procesamiento analítico en línea (OLAP).",
      "Procesamiento de transacciones en línea (OLTP)."
    ],
    "Respuesta": "Procesamiento de transacciones en línea (OLTP).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 209,
    "Pregunta": "¿Qué propiedad de transacción de base de datos garantiza que los cambios transaccionales en una base de datos se conserven durante reinicios inesperados del sistema operativo?",
    "Opciones": [
      "consistencia.",
      "durabilidad.",
      "aislamiento.",
      "atomicidad."
    ],
    "Respuesta": "durabilidad.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 210,
    "Pregunta": "Un paso de procesamiento dentro de una canalización de Azure Data Factory es una actividad.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 211,
    "Pregunta": "¿Qué instrucción es un ejemplo de Lenguaje de Definición de Datos (DDL)?",
    "Opciones": [
      "SELECT.",
      "JOIN.",
      "MERGE.",
      "CREATE."
    ],
    "Respuesta": "CREATE.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 212,
    "Pregunta": "Azure Databricks puede consumir datos de Azure SQL Database.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 213,
    "Pregunta": "Azure Databricks puede consumir datos de Azure Event Hubs.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 214,
    "Pregunta": "Una visualización que ilustra la matrícula de estudiantes actual de una universidad por departamento es un ejemplo de análisis [...].",
    "Opciones": [
      "cognitivo.",
      "descriptivo.",
      "predictivo.",
      "prescriptivo."
    ],
    "Respuesta": "descriptivo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 215,
    "Pregunta": "[...] admiten de forma nativa el análisis de la relación entre entidades.",
    "Opciones": [
      "Bases de datos de familia de columnas.",
      "Bases de datos de documentos.",
      "Bases de datos de grafos.",
      "Almacenes de clave-valor."
    ],
    "Respuesta": "Bases de datos de familia de columnas.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 216,
    "Pregunta": "Se puede usar Azure Data Studio para consultar una base de datos de Azure SQL desde un dispositivo que ejecuta macOS.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 217,
    "Pregunta": "Tenés datos guardados en el siguiente formato. ¿Qué formato se usó?",
    "Opciones": [
      "XML.",
      "yaml.",
      "JSON.",
      "HTML."
    ],
    "Respuesta": "HTML.",
    "Imagen": "question216.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 218,
    "Pregunta": "Un banco tiene un sistema que administra transacciones financieras. Al transferir dinero entre cuentas, el sistema nunca debe recuperar un valor para la cuenta de origen que refleje el saldo antes de la transferencia y un valor para la cuenta de destino que refleje el saldo después de la transferencia. ¿De qué semántica ACID es este un ejemplo?",
    "Opciones": [
      "atomicidad.",
      "aislamiento.",
      "durabilidad.",
      "consistencia."
    ],
    "Respuesta": "aislamiento.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 219,
    "Pregunta": "Tenés datos guardados en el siguiente formato. ¿Qué formato se usó?",
    "Opciones": [
      "YAML.",
      "HTML.",
      "XML.",
      "JSON."
    ],
    "Respuesta": "HTML.",
    "Imagen": "question218.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 220,
    "Pregunta": "Tu empresa está diseñando un almacén de datos que contendrá datos de estudiantes. Los datos tienen el siguiente formato. ¿Qué tipo de almacén de datos deberías usar?",
    "Opciones": [
      "grafo.",
      "clave/valor.",
      "objeto.",
      "columnar."
    ],
    "Respuesta": "columnar.",
    "Imagen": "question219.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 221,
    "Pregunta": "Relacioná los tipos de análisis que se pueden usar para responder las preguntas de negocio.",
    "Opciones": [
      "¿Por qué aumentaron las ventas el mes pasado?: Cognitivo. Proporcionar orientación específica sobre cómo asignar el presupuesto actual para comprar diferentes artículos de inventario: Predictivo. Detectar imágenes del logotipo de la empresa incluidas en documentos PDF: Prescriptivo.",
      "¿Por qué aumentaron las ventas el mes pasado?: Diagnóstico. Proporcionar orientación específica sobre cómo asignar el presupuesto actual para comprar diferentes artículos de inventario: Prescriptivo. Detectar imágenes del logotipo de la empresa incluidas en documentos PDF: Cognitivo.",
      "¿Por qué aumentaron las ventas el mes pasado?: Cognitivo. Proporcionar orientación específica sobre cómo asignar el presupuesto actual para comprar diferentes artículos de inventario: Descriptivo. Detectar imágenes del logotipo de la empresa incluidas en documentos PDF: Diagnóstico.",
      "¿Por qué aumentaron las ventas el mes pasado?: Diagnóstico. Proporcionar orientación específica sobre cómo asignar el presupuesto actual para comprar diferentes artículos de inventario: Predictivo. Detectar imágenes del logotipo de la empresa incluidas en documentos PDF: Descriptivo."
    ],
    "Respuesta": "¿Por qué aumentaron las ventas el mes pasado?: Diagnóstico. Proporcionar orientación específica sobre cómo asignar el presupuesto actual para comprar diferentes artículos de inventario: Prescriptivo. Detectar imágenes del logotipo de la empresa incluidas en documentos PDF: Cognitivo.",
    "Imagen": "question220.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 222,
    "Pregunta": "Un tablero de Microsoft Power BI está asociado a un único espacio de trabajo.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 223,
    "Pregunta": "¿De qué tarea es responsable un ingeniero de datos?",
    "Opciones": [
      "Diseñar y construir modelos analíticos.",
      "Diseñar e implementar almacenes de datos para cargas de trabajo analíticas.",
      "Explorar datos para identificar tendencias.",
      "Implementar políticas, herramientas y procesos para planes de copia de seguridad y recuperación."
    ],
    "Respuesta": "Diseñar y construir modelos analíticos.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 224,
    "Pregunta": "Necesitás usar Transact-SQL para consultar archivos en Azure Data Lake Storage desde un almacén de datos de Azure Synapse Analytics. ¿Qué deberías usar para consultar los archivos?",
    "Opciones": [
      "Azure Functions.",
      "Microsoft SQL Server Integration Services (SSIS).",
      "PolyBase.",
      "Azure Data Factory."
    ],
    "Respuesta": "PolyBase.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 225,
    "Pregunta": "El procesamiento por lotes puede enviar datos a una base de datos relacional.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 226,
    "Pregunta": "¿Qué herramienta de línea de comandos podés usar para consultar bases de datos de Azure SQL?",
    "Opciones": [
      "sqlcmd.",
      "bcp.",
      "azdata.",
      "Azure CLI."
    ],
    "Respuesta": "sqlcmd.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 227,
    "Pregunta": "¿Qué se usa para definir una consulta en trabajos de procesamiento de secuencias en Azure Stream Analytics?",
    "Opciones": [
      "XML.",
      "KQL.",
      "YAML.",
      "SQL."
    ],
    "Respuesta": "SQL.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 228,
    "Pregunta": "¿Cuál es una característica del procesamiento por lotes?",
    "Opciones": [
      "Los datos ingeridos durante el procesamiento por lotes deben procesarse tan pronto como se reciben.",
      "Los grandes conjuntos de datos deben dividirse en lotes de menos de 1 GB antes de que se puedan procesar.",
      "Hay un retraso de tiempo notable entre la ingesta de datos y la obtención de los resultados del procesamiento de datos.",
      "El procesamiento por lotes solo puede procesar datos estructurados."
    ],
    "Respuesta": "El procesamiento por lotes solo puede procesar datos estructurados.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 229,
    "Pregunta": "Para configurar una cuenta de Azure Storage para admitir listas de control de acceso que tienen permisos a nivel de objeto [...].",
    "Opciones": [
      "Habilitar el espacio de nombres jerárquico.",
      "Establecer el tipo de cuenta en BlobStorage.",
      "Establecer el rendimiento en Premium.",
      "Establecer la replicación en almacenamiento con redundancia geográfica de solo lectura (RA-GRS)."
    ],
    "Respuesta": "Habilitar el espacio de nombres jerárquico.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 230,
    "Pregunta": "La normalización de una base de datos aumenta el rendimiento de las transacciones de escritura.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 231,
    "Pregunta": "Los sistemas de análisis están más normalizados que los sistemas transaccionales.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 232,
    "Pregunta": "La normalización de una base de datos da como resultado consultas que requieren más uniones (joins).",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 233,
    "Pregunta": "Relacioná los tipos de cargas de trabajo con el escenario apropiado.",
    "Opciones": [
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Lote.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Streaming. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Lote.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Streaming.",
      "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Lote. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Streaming."
    ],
    "Respuesta": "Los datos de un catálogo de productos se cargarán cada 12 horas en un almacén de datos: Lote. Los datos de las compras en línea se cargarán en un almacén de datos a medida que se produzcan las compras: Streaming. Las actualizaciones de los datos de inventario se cargarán en un almacén de datos cada 1.000 transacciones: Lote.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 234,
    "Pregunta": "Al aprovisionar una [...] de Azure Cosmos DB, debés especificar qué tipo de API usarás.",
    "Opciones": [
      "cuenta.",
      "contenedor.",
      "base de datos.",
      "elemento."
    ],
    "Respuesta": "cuenta.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 235,
    "Pregunta": "La creación de subtítulos para archivos de audio es un ejemplo de análisis [...].",
    "Opciones": [
      "cognitivo.",
      "descriptivo.",
      "predictivo.",
      "prescriptivo."
    ],
    "Respuesta": "descriptivo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 236,
    "Pregunta": "Relacioná los servicios de almacén de datos con las descripciones apropiadas.",
    "Opciones": [
      "Permite el uso de consultas SQL contra datos almacenados en documentos JSON: Azure Cosmos DB. Permite a los usuarios acceder a los datos mediante el protocolo Server Message Block (SMB) versión 3: Azure Files.",
      "Permite el uso de consultas SQL contra datos almacenados en documentos JSON: Azure Files. Permite a los usuarios acceder a los datos mediante el protocolo Server Message Block (SMB) versión 3: Azure Cosmos DB.",
      "Permite el uso de consultas SQL contra datos almacenados en documentos JSON: Azure Blob storage. Permite a los usuarios acceder a los datos mediante el protocolo Server Message Block (SMB) versión 3: Azure Table storage.",
      "Permite el uso de consultas SQL contra datos almacenados en documentos JSON: Azure Cosmos DB. Permite a los usuarios acceder a los datos mediante el protocolo Server Message Block (SMB) versión 3: Azure Table storage."
    ],
    "Respuesta": "Permite el uso de consultas SQL contra datos almacenados en documentos JSON: Azure Cosmos DB. Permite a los usuarios acceder a los datos mediante el protocolo Server Message Block (SMB) versión 3: Azure Files.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 237,
    "Pregunta": "Necesitás almacenar datos usando Azure Table storage. ¿Qué deberías crear primero?",
    "Opciones": [
      "una instancia de Azure Cosmos DB.",
      "una cuenta de almacenamiento.",
      "un contenedor de blobs.",
      "una tabla."
    ],
    "Respuesta": "una cuenta de almacenamiento.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 238,
    "Pregunta": "Tenés un grupo de SQL en Azure Synapse Analytics que solo se usa activamente todas las noches durante ocho horas. Necesitás minimizar el costo del grupo de SQL durante los tiempos de inactividad. La solución debe garantizar que los datos permanezcan intactos. ¿Qué deberías hacer en el grupo de SQL?",
    "Opciones": [
      "Reducir las unidades de almacenamiento de datos (DWU).",
      "Pausar el grupo.",
      "Crear un punto de restauración definido por el usuario.",
      "Eliminar el grupo."
    ],
    "Respuesta": "Pausar el grupo.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 239,
    "Pregunta": "[...] presenta contenido definido por una consulta.",
    "Opciones": [
      "Un montón (heap).",
      "Un procedimiento almacenado.",
      "Una vista.",
      "Un índice."
    ],
    "Respuesta": "Una vista.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 240,
    "Pregunta": "¿Qué se puede usar con el soporte nativo de cuadernos para consultar y visualizar datos mediante una interfaz basada en web?",
    "Opciones": [
      "Azure Databricks.",
      "pgAdmin.",
      "Microsoft Power BI."
    ],
    "Respuesta": "Azure Databricks.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 241,
    "Pregunta": "[...] es responsable de administrar la seguridad de los datos en una base de datos.",
    "Opciones": [
      "Un analista de datos.",
      "Un ingeniero de datos.",
      "Un científico de datos.",
      "Un administrador de base de datos."
    ],
    "Respuesta": "Un administrador de base de datos.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 242,
    "Pregunta": "[...] proporciona una gama completa de funciones de modelado de datos y edición de informes de Power BI.",
    "Opciones": [
      "Microsoft Power BI Desktop.",
      "El servicio Microsoft Power BI.",
      "La aplicación de teléfono de Microsoft Power BI."
    ],
    "Respuesta": "Microsoft Power BI Desktop.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 243,
    "Pregunta": "¿Qué servicio de Azure proporciona la mayor compatibilidad para las bases de datos migradas desde Microsoft SQL Server 2019 Enterprise edition?",
    "Opciones": [
      "un grupo elástico de Azure SQL Database.",
      "Azure SQL Managed Instance.",
      "Azure Database for MySQL.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure SQL Managed Instance.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 244,
    "Pregunta": "[...] es responsable de identificar qué reglas de negocio deben aplicarse a los datos de una empresa.",
    "Opciones": [
      "Un analista de datos.",
      "Un ingeniero de datos.",
      "Un científico de datos."
    ],
    "Respuesta": "Un científico de datos.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 245,
    "Pregunta": "Relacioná las herramientas con las descripciones apropiadas.",
    "Opciones": [
      "Una herramienta gráfica para administrar bases de datos de SQL Server o Azure SQL que admite tareas de acceso, configuración, administración y gestión: Microsoft SQL Server Data Tools (SSMS). Un editor de código fuente ligero con una extensión mssql que admite conexiones a SQL Server y una rica experiencia de edición para T-SQL: Microsoft Visual Studio Code. Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel: Azure Data Studio. Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS): Microsoft SQL Server Data Tools (SSDT).",
      "Una herramienta gráfica para administrar bases de datos de SQL Server o Azure SQL que admite tareas de acceso, configuración, administración y gestión: Azure Data Studio. Un editor de código fuente ligero con una extensión mssql que admite conexiones a SQL Server y una rica experiencia de edición para T-SQL: Microsoft SQL Server Data Tools (SSMS). Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel: Azure Data Studio. Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS): Microsoft SQL Server Data Tools (SSDT).",
      "Una herramienta gráfica para administrar bases de datos de SQL Server o Azure SQL que admite tareas de acceso, configuración, administración y gestión: Microsoft SQL Server Data Tools (SSMS). Un editor de código fuente ligero con una extensión mssql que admite conexiones a SQL Server y una rica experiencia de edición para T-SQL: Microsoft Visual Studio Code. Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel: Microsoft SQL Server Data Tools (SSDT). Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS): Azure Data Studio.",
      "Una herramienta gráfica para administrar bases de datos de SQL Server o Azure SQL que admite tareas de acceso, configuración, administración y gestión: Microsoft Visual Studio Code. Un editor de código fuente ligero con una extensión mssql que admite conexiones a SQL Server y una rica experiencia de edición para T-SQL: Microsoft SQL Server Data Tools (SSMS). Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel: Microsoft SQL Server Data Tools (SSDT). Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS): Azure Data Studio."
    ],
    "Respuesta": "Una herramienta gráfica para administrar bases de datos de SQL Server o Azure SQL que admite tareas de acceso, configuración, administración y gestión: Microsoft SQL Server Data Tools (SSMS). Un editor de código fuente ligero con una extensión mssql que admite conexiones a SQL Server y una rica experiencia de edición para T-SQL: Microsoft Visual Studio Code. Un editor ligero que puede ejecutar consultas SQL bajo demanda y ver y guardar los resultados como archivos de texto, JSON o Microsoft Excel: Azure Data Studio. Una herramienta de desarrollo para crear bases de datos de Azure SQL, bases de datos relacionales de Microsoft SQL Server, modelos de datos de SQL Server Analysis Services (SSAS), paquetes de SQL Server Integration Services (SSIS) e informes de SQL Server Reporting Services (SSRS): Microsoft SQL Server Data Tools (SSDT).",
    "Imagen": "question251.jpg",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 246,
    "Pregunta": "Un proceso de extracción, transformación y carga (ETL) requiere [...].",
    "Opciones": [
      "un esquema coincidente en el origen y el destino de los datos.",
      "un almacén de datos de destino lo suficientemente potente como para transformar los datos.",
      "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino.",
      "que el destino de los datos sea una base de datos relacional."
    ],
    "Respuesta": "datos que se procesan completamente antes de cargarlos en el almacén de datos de destino.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 247,
    "Pregunta": "Por defecto, cada base de datos de Azure SQL está protegida por [...].",
    "Opciones": [
      "un grupo de seguridad de red (NSG).",
      "un firewall a nivel de servidor.",
      "Azure Firewall.",
      "Azure Front Door."
    ],
    "Respuesta": "Azure Firewall.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 248,
    "Pregunta": "Tu empresa está diseñando una base de datos que contendrá datos de sesión para un sitio web. Los datos incluirán notificaciones, atributos de personalización y productos que se agregan a un carrito de compras. ¿Qué tipo de almacén de datos proporcionará la latencia más baja para recuperar los datos?",
    "Opciones": [
      "clave/valor.",
      "grafo.",
      "columnar.",
      "documento."
    ],
    "Respuesta": "columnar.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 249,
    "Pregunta": "¿Qué dos configuraciones podés configurar a nivel de contenedor? Cada respuesta correcta presenta una solución completa.",
    "Opciones": [
      "el rendimiento (throughput).",
      "la región de lectura.",
      "la clave de partición.",
      "la API."
    ],
    "Respuesta": [
      "el rendimiento (throughput).",
      "la clave de partición."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 250,
    "Pregunta": "[...] es responsable de crear visualizaciones y gráficos que ayuden a una empresa a tomar decisiones informadas.",
    "Opciones": [
      "Un analista de datos.",
      "Un ingeniero de datos.",
      "Un científico de datos.",
      "Un administrador de base de datos"
    ],
    "Respuesta": "Un ingeniero de datos.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 251,
    "Pregunta": "Un [...] es un gráfico de rectángulos de colores. El tamaño de los rectángulos representa el valor relativo de cada elemento. El gráfico puede ser jerárquico, mostrando los datos como un conjunto de rectángulos anidados dentro del rectángulo principal.",
    "Opciones": [
      "gráfico de líneas.",
      "matriz.",
      "dispersión.",
      "mapa de árbol."
    ],
    "Respuesta": "mapa de árbol.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 252,
    "Pregunta": "Un objeto de base de datos que contiene datos.",
    "Opciones": [
      "Índice.",
      "Vista.",
      "Tabla."
    ],
    "Respuesta": "Tabla.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 253,
    "Pregunta": "Un objeto de base de datos cuyo contenido se define mediante una consulta.",
    "Opciones": [
      "Índice.",
      "Vista.",
      "Tabla."
    ],
    "Respuesta": "Vista.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 254,
    "Pregunta": "Un objeto de base de datos que ayuda a mejorar la velocidad de recuperación de datos.",
    "Opciones": [
      "Índice.",
      "Vista.",
      "Tabla."
    ],
    "Respuesta": "Índice.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 255,
    "Pregunta": "¿Cuáles son dos características del procesamiento de datos en tiempo real? Cada respuesta correcta presenta una solución completa.",
    "Opciones": [
      "Los datos se procesan a medida que se crean.",
      "Se espera una baja latencia.",
      "La alta latencia es aceptable.",
      "Los datos se procesan periódicamente."
    ],
    "Respuesta": [
      "Los datos se procesan a medida que se crean.",
      "Se espera una baja latencia."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 256,
    "Pregunta": "En Azure Table storage, cada fila de una tabla debe identificarse de forma única mediante qué dos componentes?",
    "Opciones": [
      "una marca de tiempo.",
      "un rango.",
      "una clave de fila.",
      "una clave de partición."
    ],
    "Respuesta": [
      "una clave de fila.",
      "una clave de partición."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 257,
    "Pregunta": "Relacioná los términos con las descripciones apropiadas.",
    "Opciones": [
      "Azure Data Explorer: KQL. Azure Stream Analytics: SQL. Azure Synapse Analytics: Python.",
      "Azure Data Explorer: SQL. Azure Stream Analytics: KQL. Azure Synapse Analytics: Python.",
      "Azure Data Explorer: Python. Azure Stream Analytics: SQL. Azure Synapse Analytics: KQL."
    ],
    "Respuesta": "Azure Data Explorer: KQL. Azure Stream Analytics: SQL. Azure Synapse Analytics: Python.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 258,
    "Pregunta": "Una cuenta de Azure Storage debe tener [...] habilitado para admitir Azure Data Lake Storage.",
    "Opciones": [
      "Eliminación suave de blobs.",
      "Espacio de nombres jerárquico.",
      "Grandes recursos compartidos de archivos.",
      "Control de versiones."
    ],
    "Respuesta": "Espacio de nombres jerárquico.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 259,
    "Pregunta": "Necesitás almacenar datos de registro de eventos que son semiestructurados y se reciben a medida que ocurren los registros. ¿Qué deberías usar?",
    "Opciones": [
      "Azure Table storage.",
      "Azure Queue storage.",
      "Azure Files."
    ],
    "Respuesta": "Azure Queue storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 260,
    "Pregunta": "¿Qué tres objetos se pueden agregar a un tablero de Microsoft Power BI? Cada respuesta correcta presenta una solución completa.",
    "Opciones": [
      "una página de informe.",
      "una diapositiva de Microsoft PowerPoint.",
      "una visualización de un informe.",
      "un flujo de datos.",
      "un cuadro de texto."
    ],
    "Respuesta": [
      "una página de informe.",
      "una visualización de un informe.",
      "un cuadro de texto."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 261,
    "Pregunta": "[...] es un servicio de datos relacionales de plataforma como servicio (PaaS) que utiliza procesamiento masivamente paralelo (MPP).",
    "Opciones": [
      "Azure SQL Database.",
      "Azure Synapse Analytics.",
      "Azure Database for MariaDB.",
      "SQL Server en Azure en máquinas virtuales de Azure."
    ],
    "Respuesta": "Azure Synapse Analytics.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 262,
    "Pregunta": "Necesitás asegurarte de que los usuarios usen la autenticación multifactor (MFA) al conectarse a una base de datos de Azure SQL. ¿Qué tipo de autenticación deberías usar?",
    "Opciones": [
      "autenticación de principal de servicio.",
      "autenticación de Azure Active Directory (Azure AD).",
      "autenticación de SQL.",
      "autenticación de certificado."
    ],
    "Respuesta": "autenticación de Azure Active Directory (Azure AD).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 263,
    "Pregunta": "Necesitás almacenar datos de registro de eventos semiestructurados que se reciben a medida que se producen los registros. ¿Qué deberías usar?",
    "Opciones": [
      "Azure Table storage.",
      "Azure Queue storage.",
      "Azure Files."
    ],
    "Respuesta": "Azure Table storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 264,
    "Pregunta": "En una instrucción SQL, [...] son ejemplos de funciones de agregado.",
    "Opciones": [
      "FROM y WHERE.",
      "GROUP BY y ORDER BY.",
      "JOIN y MERGE.",
      "MAX y MIN."
    ],
    "Respuesta": "MAX y MIN.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 265,
    "Pregunta": "Tenés datos guardados en el siguiente formato. ¿Qué formato se usó?",
    "Opciones": [
      "YAML.",
      "HTML.",
      "XML.",
      "JSON."
    ],
    "Respuesta": "XML.",
    "Imagen": "question275.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 266,
    "Pregunta": "Los sistemas de procesamiento analítico en línea (OLAP) son particularmente adecuados para cargas de trabajo analíticas porque los datos están [...].",
    "Opciones": [
      "limitados en tamaño.",
      "optimizados para transacciones.",
      "preagregados.",
      "de solo lectura."
    ],
    "Respuesta": "optimizados para transacciones.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 267,
    "Pregunta": "Necesitás crear un recurso de Azure para almacenar datos en Azure Table storage. ¿Qué comando deberías ejecutar?",
    "Opciones": [
      "az scorage share create.",
      "az scorage account creace.",
      "az cosmosdb creace.",
      "az scorage concainer creace."
    ],
    "Respuesta": "az scorage account creace.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 268,
    "Pregunta": "¿Cuál es el propósito principal de un almacén de datos?",
    "Opciones": [
      "Proporcionar respuestas a consultas complejas que se basan en datos de múltiples fuentes.",
      "Proporcionar servicios de transformación entre los almacenes de datos de origen y de destino.",
      "Proporcionar almacenamiento de solo lectura de datos históricos relacionales y no relacionales.",
      "Proporcionar almacenamiento para aplicaciones transaccionales de línea de negocio (LOB)."
    ],
    "Respuesta": "Proporcionar respuestas a consultas complejas que se basan en datos de múltiples fuentes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 269,
    "Pregunta": "¿Qué instrucción T-SQL se debe usar para indicar a un sistema de administración de bases de datos que use un índice en lugar de realizar un examen de tabla completo?",
    "Opciones": [
      "WHERE.",
      "SELECT.",
      "JOIN."
    ],
    "Respuesta": "SELECT.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 270,
    "Pregunta": "¿Qué componente de Azure Data Factory te permite definir una secuencia de actividades que incluyen iteradores for each?",
    "Opciones": [
      "Flujo de control.",
      "Servicios vinculados.",
      "Conjuntos de datos.",
      "El tiempo de ejecución de integración."
    ],
    "Respuesta": "Servicios vinculados.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 271,
    "Pregunta": "Azure SQL Database incluye un servicio de copia de seguridad totalmente administrado.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 272,
    "Pregunta": "Azure SQL Database tiene alta disponibilidad incorporada.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 273,
    "Pregunta": "Azure SQL Database puede usar Azure Advanced Threat Protection (ATP).",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 274,
    "Pregunta": "Los administradores de bases de datos aplican rutinas de limpieza de datos y convierten los datos en información útil.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 275,
    "Pregunta": "Los ingenieros de datos administran bases de datos, almacenan copias de seguridad de los datos y restauran los datos en caso de falla.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 276,
    "Pregunta": "Los analistas de datos crean visuales de datos y permiten a las empresas tomar decisiones basadas en datos.",
    "Opciones": [
      "Sí.",
      "No."
    ],
    "Respuesta": "Sí.",
    "Categoria": "ConceptosDatos"
  }
];
