document.addEventListener('DOMContentLoaded', () => {

    // ==================================================================================
    // TRADUCCIONES Y BANCO DE PREGUNTAS
    // ==================================================================================
    const translations = {
        es: {
            ui: {
                examTitle: "Simulador de Examen: DP-900",
                timerLabel: "Tiempo Restante",
                loadingQuestion: "Cargando pregunta...",
                flagForReview: "🚩 Marcar para Revisar",
                flagged: "🚩 Marcada",
                previous: "Anterior",
                next: "Siguiente",
                reviewExam: "Revisar Examen",
                backToReview: "↩️ Volver a la Revisión",
                reviewTitle: "Revisa tus Respuestas",
                reviewInstructions: "Haz clic en un número para volver a esa pregunta. Respondidas (azul), Marcadas (naranja).",
                finalizeButton: "Finalizar y Calificar Examen",
                resultsTitle: "Resultados del Examen",
                score: (score) => `${score} / 1000`,
                passed: "¡Aprobado!",
                notPassed: "No aprobado",
                answersReviewTitle: "Revisión de Respuestas",
                yourAnswer: "Tu respuesta:",
                correctAnswer: "Respuesta correcta:",
                explanation: "Explicación:",
                notAnswered: "No respondida",
                flaggedMarker: "(🚩 Marcada)",
                tryAgain: "Intentar de Nuevo",
                questionOf: (index, total) => `Pregunta ${index} de ${total}`
            },
            questions: [ /* 40 Preguntas en Español */
                { id: '1-q1', q: "¿Qué tipo de carga de trabajo está optimizada para un gran número de transacciones cortas y rápidas?", o: ["Analítica (OLAP)", "Transaccional (OLTP)", "De streaming"], a: { key: 'b', text: 'Transaccional (OLTP)', exp: 'Las cargas de trabajo transaccionales (OLTP) están optimizadas para procesar un gran número de operaciones cortas y rápidas.' } },
                { id: '1-q2', q: "Un archivo CSV es un ejemplo de datos:", o: ["No estructurados", "Semi-estructurados", "Estructurados"], a: { key: 'c', text: 'Estructurados', exp: 'Los datos estructurados tienen un esquema fijo y se organizan en tablas con filas y columnas.' } },
                { id: '1-q3', q: "¿Cuál de las siguientes opciones describe mejor los datos no estructurados?", o: ["Datos en tablas con filas y columnas.", "Archivos de video, audio o imágenes.", "Archivos JSON."], a: { key: 'b', text: 'Archivos de video, audio o imágenes.', exp: 'Los datos no estructurados carecen de un modelo de datos específico, como los archivos multimedia.' } },
                { id: '1-q4', q: "¿Qué tipo de procesamiento de datos se ejecuta en momentos programados sobre grandes volúmenes?", o: ["Procesamiento por lotes (Batch)", "Procesamiento de streaming", "Procesamiento interactivo"], a: { key: 'a', text: 'Procesamiento por lotes (Batch)', exp: 'El procesamiento por lotes (batch) procesa grandes bloques de datos en momentos programados.' } },
                { id: '1-q5', q: "¿Cuál es el objetivo principal de la gobernanza de datos (data governance)?", o: ["Acelerar las consultas.", "Visualizar datos.", "Garantizar la calidad, seguridad y cumplimiento."], a: { key: 'c', text: 'Garantizar la calidad, seguridad y cumplimiento.', exp: 'La gobernanza de datos es el proceso general de gestionar la disponibilidad, usabilidad, integridad y seguridad de los datos.' } },
                { id: '1-q6', q: "¿Cuál es el propósito de la normalización en una base de datos relacional?", o: ["Aumentar el almacenamiento.", "Reducir la redundancia y mejorar la integridad.", "Encriptar los datos."], a: { key: 'b', text: 'Reducir la redundancia y mejorar la integridad.', exp: 'La normalización organiza las columnas y tablas para minimizar la duplicación de datos.' } },
                { id: '1-q7', q: "¿Qué propiedades garantizan la fiabilidad de las transacciones en una base de datos?", o: ["ACID", "Velocidad, Volumen, Variedad", "ITL"], a: { key: 'a', text: 'ACID', exp: 'ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) son las cuatro propiedades que garantizan que las transacciones se procesen de forma fiable.' } },
                { id: '1-q8', q: "¿Diferencia clave entre un Data Lake y un Data Warehouse?", o: ["Son lo mismo.", "Un Data Lake usa SQL y un Data Warehouse no.", "Un Data Lake almacena datos brutos y un Data Warehouse datos procesados."], a: { key: 'c', text: 'Un Data Lake almacena datos brutos y un Data Warehouse datos procesados.', exp: 'El Data Lake es para datos en formato nativo, mientras que el Data Warehouse contiene datos estructurados para análisis.' } },
                { id: '2-q1', q: "¿Qué rol es el principal responsable de crear pipelines de ETL/ELT?", o: ["Analista de Datos", "Ingeniero de Datos", "DBA"], a: { key: 'b', text: 'Ingeniero de Datos', exp: 'El Ingeniero de Datos es responsable de diseñar, construir y mantener los pipelines de datos.' } },
                { id: '2-q2', q: "Un profesional que crea informes con Power BI desempeña el rol de:", o: ["Analista de Datos", "Ingeniero de Datos", "Arquitecto de Azure"], a: { key: 'a', text: 'Analista de Datos', exp: 'El Analista de Datos se especializa en interpretar datos y crear visualizaciones.' } },
                { id: '2-q3', q: "La optimización y seguridad de una base de datos son tareas de un:", o: ["Científico de Datos", "Analista de Datos", "DBA"], a: { key: 'c', text: 'DBA', exp: 'El DBA se enfoca en la gestión, seguridad, rendimiento y disponibilidad de los sistemas de bases de datos.' } },
                { id: '2-q4', q: "¿Qué rol es responsable de la limpieza y la garantía de calidad de los datos?", o: ["Analista de Negocios", "Ingeniero de Datos", "Administrador de Proyectos"], a: { key: 'b', text: 'Ingeniero de Datos', exp: 'La limpieza y aseguramiento de la calidad de los datos es una tarea fundamental de los Ingenieros de Datos.' } },
                { id: '2-q5', q: "¿Qué se entiende por 'Self-Service Analytics'?", o: ["Usuarios de negocio creando informes sin ayuda de TI.", "Una base de datos que se auto-repara.", "Analizar datos usando solo SQL."], a: { key: 'a', text: 'Usuarios de negocio creando informes sin ayuda de TI.', exp: 'El Self-Service Analytics permite a los usuarios finales acceder y analizar datos por sí mismos.' } },
                { id: '2-q6', q: "¿Qué rol se enfoca en crear modelos predictivos y usar machine learning?", o: ["Analista de Seguridad", "Ingeniero de Software", "Científico de Datos"], a: { key: 'c', text: 'Científico de Datos', exp: 'El Científico de Datos se especializa en aplicar algoritmos de machine learning y modelos estadísticos.' } },
                { id: '2-q7', q: "¿Quién es responsable de gestionar los costes de una suscripción de Azure?", o: ["Ingeniero de Datos", "Administrador de la Nube", "Analista de Datos"], a: { key: 'b', text: 'Administrador de la Nube', exp: 'La gestión de costes y la optimización de la suscripción de Azure suele recaer en un Administrador de la Nube.' } },
                { id: '2-q8', q: "¿Cuál es la función de un 'Data Steward'?", o: ["Definir y hacer cumplir las políticas sobre cómo se manejan los datos.", "Escribir código para aplicaciones.", "Diseñar la interfaz de usuario."], a: { key: 'a', text: 'Definir y hacer cumplir las políticas sobre cómo se manejan los datos.', exp: 'El rol de Data Steward se centra en la gobernanza y en asegurar que los datos se gestionen según las políticas.' } },
                { id: '3-q1', q: "¿Cuál es el servicio de base de datos relacional PaaS insignia de Azure?", o: ["SQL Server en VM", "Azure SQL Database", "Azure Cosmos DB"], a: { key: 'b', text: 'Azure SQL Database', exp: 'Azure SQL Database es el servicio insignia de base de datos relacional como servicio (PaaS) de Microsoft.' } },
                { id: '3-q2', q: "¿Qué ventaja principal ofrece un servicio PaaS como Azure SQL?", o: ["Control total del SO.", "No requiere internet.", "Azure gestiona actualizaciones y backups."], a: { key: 'c', text: 'Azure gestiona actualizaciones y backups.', exp: 'La principal ventaja de PaaS es que la nube se encarga de la infraestructura y la administración.' } },
                { id: '3-q3', q: "¿Qué modelo de datos usan Azure Database for MySQL y PostgreSQL?", o: ["No relacional", "Relacional", "De grafos"], a: { key: 'b', text: 'Relacional', exp: 'Tanto MySQL como PostgreSQL son Sistemas de Gestión de Bases de Datos Relacionales (RDBMS).' } },
                { id: '3-q4', q: "¿Propósito de un índice en una base de datos relacional?", o: ["Acelerar las consultas.", "Hacer copias de seguridad.", "Limitar el acceso."], a: { key: 'a', text: 'Acelerar las consultas.', exp: 'Un índice es una estructura de datos que permite recuperar filas de una tabla mucho más rápidamente.' } },
                { id: '3-q5', q: "¿Qué servicio de Azure ofrece mayor compatibilidad con SQL Server on-premise?", o: ["Azure DB for PostgreSQL", "Azure SQL DB", "Azure SQL Managed Instance"], a: { key: 'c', text: 'Azure SQL Managed Instance', exp: 'SQL Managed Instance ofrece casi un 100% de compatibilidad con SQL Server on-premise.' } },
                { id: '3-q6', q: "En SQL, ¿qué es una VISTA (VIEW)?", o: ["Una copia física de una tabla.", "Una consulta almacenada que se comporta como tabla virtual.", "Un tipo de dato para video."], a: { key: 'b', text: 'Una consulta almacenada que se comporta como tabla virtual.', exp: 'Una vista (VIEW) es el resultado de una consulta SELECT guardada.' } },
                { id: '3-q7', q: "¿Para qué se usa la funcionalidad de 'Read scale-out' en Azure SQL?", o: ["Crear réplicas de solo lectura para distribuir la carga.", "Aumentar el tamaño de la BD.", "Reducir costes."], a: { key: 'a', text: 'Crear réplicas de solo lectura para distribuir la carga.', exp: 'El escalado horizontal de lectura mejora el rendimiento para cargas de trabajo con muchas lecturas.' } },
                { id: '3-q8', q: "¿Qué se usa para hacer cumplir la integridad referencial entre tablas?", o: ["Clave primaria", "Índice", "Clave externa"], a: { key: 'c', text: 'Clave externa', exp: 'Una clave externa (Foreign Key) crea un vínculo entre tablas y garantiza la integridad referencial.' } },
                { id: '4-q1', q: "¿Cuál es el servicio de base de datos NoSQL insignia de Azure?", o: ["Azure SQL DB", "Azure Cache for Redis", "Azure Cosmos DB"], a: { key: 'c', text: 'Azure Cosmos DB', exp: 'Cosmos DB es la base de datos NoSQL multimodelo y distribuida globalmente de Azure.' } },
                { id: '4-q2', q: "Para almacenar archivos grandes no estructurados como videos, ¿qué servicio usarías?", o: ["Azure File Storage", "Azure Blob Storage", "Azure Table Storage"], a: { key: 'b', text: 'Azure Blob Storage', exp: 'Blob Storage está optimizado para almacenar cantidades masivas de datos no estructurados.' } },
                { id: '4-q3', q: "La capacidad de soportar múltiples APIs (SQL, MongoDB, etc.) es una característica de:", o: ["Azure SQL DB", "Azure Cosmos DB", "Azure DB for MySQL"], a: { key: 'b', text: 'Azure Cosmos DB', exp: 'La capacidad multimodelo de Cosmos DB le permite ser compatible con varias APIs.' } },
                { id: '4-q4', q: "En Azure Cosmos DB, ¿qué define la clave de partición?", o: ["La forma en que los datos se distribuyen lógicamente.", "La clave de encriptación.", "El nombre de usuario admin."], a: { key: 'a', text: 'La forma en que los datos se distribuyen lógicamente.', exp: 'La clave de partición es crucial en Cosmos DB para distribuir los datos entre particiones lógicas.' } },
                { id: '4-q5', q: "¿Cuáles son los niveles de consistencia que ofrece Azure Cosmos DB?", o: ["Solo fuerte y eventual.", "Transaccional y analítica.", "Fuerte, obsolescencia limitada, sesión, prefijo coherente y eventual."], a: { key: 'c', text: 'Fuerte, obsolescencia limitada, sesión, prefijo coherente y eventual.', exp: 'Cosmos DB ofrece cinco niveles de consistencia bien definidos.' } },
                { id: '4-q6', q: "¿Para qué caso de uso es más adecuado Azure Table Storage?", o: ["Para almacenar datos clave-valor simples.", "Para alojar VMs complejas.", "Para streaming de video."], a: { key: 'a', text: 'Para almacenar datos clave-valor simples.', exp: 'Azure Table Storage es ideal para aplicaciones que necesitan almacenar grandes cantidades de datos no relacionales simples.' } },
                { id: '4-q7', q: "¿Para qué se utiliza la API Gremlin en Azure Cosmos DB?", o: ["Bases de datos relacionales.", "Bases de datos de grafos.", "Bases de datos de series temporales."], a: { key: 'b', text: 'Bases de datos de grafos.', exp: 'La API Gremlin en Cosmos DB está diseñada para trabajar con modelos de datos de grafos.' } },
                { id: '4-q8', q: "¿Qué servicio es ideal para migraciones 'lift-and-shift' de servidores de archivos locales?", o: ["Blob Storage", "Data Lake Storage", "Azure Files"], a: { key: 'c', text: 'Azure Files', exp: 'Azure Files proporciona recursos compartidos de archivos a los que se puede acceder mediante el protocolo SMB.' } },
                { id: '5-q1', q: "¿Qué herramienta se usa para crear visualizaciones de datos interactivas y cuadros de mando?", o: ["Azure Data Factory", "Power BI", "Azure Databricks"], a: { key: 'b', text: 'Power BI', exp: 'Power BI es la herramienta de Business Intelligence de Microsoft para la creación de informes interactivos.' } },
                { id: '5-q2', q: "¿Qué servicio combina data warehousing y análisis de Big Data?", o: ["Azure Synapse Analytics", "Azure HDInsight", "Azure Cosmos DB"], a: { key: 'a', text: 'Azure Synapse Analytics', exp: 'Synapse Analytics es una plataforma integrada que combina Data Warehousing con análisis de Big Data.' } },
                { id: '5-q3', q: "El proceso de extraer, transformar y cargar datos se conoce como:", o: ["OLTP", "Data Mining", "ETL"], a: { key: 'c', text: 'ETL', exp: 'ETL (Extract, Transform, Load) es el proceso estándar para recopilar, convertir y cargar datos.' } },
                { id: '5-q4', q: "¿Cuál es la descripción principal de Azure Data Factory?", o: ["Servicio para orquestar y automatizar flujos de trabajo de datos.", "Base de datos de telemetría.", "Herramienta de visualización geoespacial."], a: { key: 'a', text: 'Servicio para orquestar y automatizar flujos de trabajo de datos.', exp: 'Azure Data Factory es el servicio de integración de datos para crear, programar y orquestar flujos de trabajo de ETL/ELT.' } },
                { id: '5-q5', q: "En un data warehouse modelo, ¿qué es una tabla de dimensiones?", o: ["Tabla que almacena claves de encriptación.", "Tabla con atributos descriptivos de los datos de negocio.", "Tabla que registra errores."], a: { key: 'b', text: 'Tabla con atributos descriptivos de los datos de negocio.', exp: 'Una tabla de dimensiones contiene las características de un objeto de negocio (ej. Cliente, Producto).' } },
                { id: '5-q6', q: "En un data warehouse modelo, ¿qué es una tabla de hechos?", o: ["Tabla con nombres de usuarios.", "Tabla de configuración.", "Tabla con mediciones numéricas o métricas."], a: { key: 'c', text: 'Tabla con mediciones numéricas o métricas.', exp: 'La tabla de hechos es la tabla central en un esquema de estrella y contiene los datos cuantitativos.' } },
                { id: '5-q7', q: "¿Cuál es la mejor descripción de Azure Databricks?", o: ["Plataforma de análisis basada en Apache Spark.", "Servicio de base de datos NoSQL.", "Herramienta de gestión de identidades."], a: { key: 'a', text: 'Plataforma de análisis basada en Apache Spark.', exp: 'Azure Databricks proporciona un entorno optimizado para Apache Spark para ingeniería de datos y machine learning.' } },
                { id: '5-q8', q: "¿Qué tecnología de Synapse Analytics permite consultar datos in situ desde fuentes externas?", o: ["Stream Analytics", "PolyBase", "Power Automate"], a: { key: 'b', text: 'PolyBase', exp: 'PolyBase es una tecnología que permite acceder y combinar datos relacionales y no relacionales desde SQL Server sin moverlos.' } }
            ]
        },
        en: {
            ui: {
                examTitle: "DP-900 Exam Simulator",
                timerLabel: "Time Left",
                loadingQuestion: "Loading question...",
                flagForReview: "🚩 Flag for Review",
                flagged: "🚩 Flagged",
                previous: "Previous",
                next: "Next",
                reviewExam: "Review Exam",
                backToReview: "↩️ Back to Review",
                reviewTitle: "Review Your Answers",
                reviewInstructions: "Click a number to return to that question. Answered (blue), Flagged (orange).",
                finalizeButton: "Finalize and Grade Exam",
                resultsTitle: "Exam Results",
                score: (score) => `${score} / 1000`,
                passed: "Passed!",
                notPassed: "Not Passed",
                answersReviewTitle: "Answers Review",
                yourAnswer: "Your answer:",
                correctAnswer: "Correct answer:",
                explanation: "Explanation:",
                notAnswered: "Not answered",
                flaggedMarker: " (🚩 Flagged)",
                tryAgain: "Try Again",
                questionOf: (index, total) => `Question ${index} of ${total}`
            },
            questions: [ /* 40 Questions in English */
                { id: '1-q1', q: "Which type of workload is optimized for a large number of short and fast transactions?", o: ["Analytical (OLAP)", "Transactional (OLTP)", "Streaming"], a: { key: 'b', text: 'Transactional (OLTP)', exp: 'Transactional (OLTP) workloads are optimized to process a large number of short and fast operations.' } },
                { id: '1-q2', q: "A CSV file is an example of:", o: ["Unstructured data", "Semi-structured data", "Structured data"], a: { key: 'c', text: 'Structured data', exp: 'Structured data has a fixed schema and is organized into tables with rows and columns.' } },
                { id: '1-q3', q: "Which of the following best describes unstructured data?", o: ["Data in tables with rows and columns.", "Video, audio, or image files.", "JSON files."], a: { key: 'b', text: 'Video, audio, or image files.', exp: 'Unstructured data lacks a specific data model, like multimedia files.' } },
                { id: '1-q4', q: "What type of data processing runs on large volumes of data at scheduled times?", o: ["Batch processing", "Stream processing", "Interactive processing"], a: { key: 'a', text: 'Batch processing', exp: 'Batch processing handles large blocks of data at scheduled intervals.' } },
                { id: '1-q5', q: "What is the main goal of data governance?", o: ["To speed up database queries.", "To visualize data in reports.", "To ensure data quality, security, and compliance."], a: { key: 'c', text: 'To ensure data quality, security, and compliance.', exp: 'Data governance is the overall process of managing the availability, usability, integrity, and security of data.' } },
                { id: '1-q6', q: "What is the purpose of normalization in a relational database?", o: ["To increase storage space.", "To reduce data redundancy and improve integrity.", "To encrypt the data."], a: { key: 'b', text: 'To reduce data redundancy and improve integrity.', exp: 'Normalization organizes columns and tables to minimize data duplication.' } },
                { id: '1-q7', q: "What properties ensure the reliability of database transactions?", o: ["ACID", "Velocity, Volume, Variety", "ITL"], a: { key: 'a', text: 'ACID', exp: 'ACID (Atomicity, Consistency, Isolation, Durability) are the four properties that guarantee reliable transaction processing.' } },
                { id: '1-q8', q: "What is the key difference between a Data Lake and a Data Warehouse?", o: ["They are the same.", "A Data Lake uses SQL and a Data Warehouse does not.", "A Data Lake stores raw data, and a Data Warehouse stores processed data."], a: { key: 'c', text: 'A Data Lake stores raw data, and a Data Warehouse stores processed data.', exp: 'The Data Lake is for data in its native format, while the Data Warehouse holds structured, filtered data for analysis.' } },
                { id: '2-q1', q: "Which role is primarily responsible for creating ETL/ELT pipelines?", o: ["Data Analyst", "Data Engineer", "DBA"], a: { key: 'b', text: 'Data Engineer', exp: 'The Data Engineer is responsible for designing, building, and maintaining data pipelines.' } },
                { id: '2-q2', q: "A professional who creates reports with Power BI holds the role of:", o: ["Data Analyst", "Data Engineer", "Azure Architect"], a: { key: 'a', text: 'Data Analyst', exp: 'The Data Analyst specializes in interpreting data and creating visualizations.' } },
                { id: '2-q3', q: "Database performance tuning and security are tasks for a:", o: ["Data Scientist", "Data Analyst", "DBA"], a: { key: 'c', text: 'DBA', exp: 'The DBA focuses on the management, security, performance, and availability of database systems.' } },
                { id: '2-q4', q: "Which role is generally responsible for data cleansing and quality assurance?", o: ["Business Analyst", "Data Engineer", "Project Manager"], a: { key: 'b', text: 'Data Engineer', exp: 'Data cleansing and quality assurance are fundamental tasks for Data Engineers.' } },
                { id: '2-q5', q: "What is meant by 'Self-Service Analytics'?", o: ["Business users creating reports without IT help.", "A self-healing database.", "Analyzing data using only SQL."], a: { key: 'a', text: 'Business users creating reports without IT help.', exp: 'Self-Service Analytics allows end-users to access and analyze data themselves.' } },
                { id: '2-q6', q: "Which role focuses on creating predictive models and using machine learning?", o: ["Security Analyst", "Software Engineer", "Data Scientist"], a: { key: 'c', text: 'Data Scientist', exp: 'The Data Scientist specializes in applying machine learning algorithms and statistical models.' } },
                { id: '2-q7', q: "Who is primarily responsible for managing the costs of an Azure subscription?", o: ["Data Engineer", "Cloud Administrator", "Data Analyst"], a: { key: 'b', text: 'Cloud Administrator', exp: 'Cost management and subscription optimization typically fall to a Cloud Administrator.' } },
                { id: '2-q8', q: "What is the function of a 'Data Steward'?", o: ["To define and enforce policies on how data is handled.", "To write code for business applications.", "To design the user interface of reports."], a: { key: 'a', text: 'To define and enforce policies on how data is handled.', exp: 'The Data Steward role focuses on governance and ensuring data is managed according to policies.' } },
                { id: '3-q1', q: "What is Azure's flagship PaaS relational database service?", o: ["SQL Server on a VM", "Azure SQL Database", "Azure Cosmos DB"], a: { key: 'b', text: 'Azure SQL Database', exp: 'Azure SQL Database is Microsoft\'s flagship relational database-as-a-service (PaaS).' } },
                { id: '3-q2', q: "What is a primary advantage of a PaaS service like Azure SQL?", o: ["Full OS control.", "No internet required.", "Azure manages updates and backups."], a: { key: 'c', text: 'Azure manages updates and backups.', exp: 'The main advantage of PaaS is that the cloud provider handles infrastructure and administration.' } },
                { id: '3-q3', q: "What data model do Azure Database for MySQL and PostgreSQL use?", o: ["Non-relational", "Relational", "Graph"], a: { key: 'b', text: 'Relational', exp: 'Both MySQL and PostgreSQL are Relational Database Management Systems (RDBMS).' } },
                { id: '3-q4', q: "What is the purpose of an index in a relational database?", o: ["To speed up queries.", "To perform backups.", "To limit access."], a: { key: 'a', text: 'To speed up queries.', exp: 'An index is a data structure that allows much faster retrieval of rows from a table.' } },
                { id: '3-q5', q: "Which Azure service offers the highest compatibility with on-premise SQL Server?", o: ["Azure DB for PostgreSQL", "Azure SQL DB", "Azure SQL Managed Instance"], a: { key: 'c', text: 'Azure SQL Managed Instance', exp: 'SQL Managed Instance offers nearly 100% compatibility with on-premise SQL Server.' } },
                { id: '3-q6', q: "In SQL, what is a VIEW?", o: ["A physical copy of a table.", "A stored query that behaves like a virtual table.", "A data type for video."], a: { key: 'b', text: 'A stored query that behaves like a virtual table.', exp: 'A VIEW is the result of a saved SELECT query.' } },
                { id: '3-q7', q: "What is the 'Read scale-out' feature in Azure SQL used for?", o: ["Creating read-only replicas to distribute load.", "Increasing the main database size.", "Reducing costs."], a: { key: 'a', text: 'Creating read-only replicas to distribute load.', exp: 'Read scale-out improves performance for read-heavy workloads.' } },
                { id: '3-q8', q: "What is used to enforce referential integrity between tables?", o: ["Primary Key", "Index", "Foreign Key"], a: { key: 'c', text: 'Foreign Key', exp: 'A Foreign Key creates a link between tables and ensures referential integrity.' } },
                { id: '4-q1', q: "What is Azure's flagship NoSQL database service?", o: ["Azure SQL DB", "Azure Cache for Redis", "Azure Cosmos DB"], a: { key: 'c', text: 'Azure Cosmos DB', exp: 'Cosmos DB is Azure\'s globally distributed, multi-model NoSQL database.' } },
                { id: '4-q2', q: "To store large unstructured files like videos, which service would you use?", o: ["Azure File Storage", "Azure Blob Storage", "Azure Table Storage"], a: { key: 'b', text: 'Azure Blob Storage', exp: 'Blob Storage is optimized for storing massive amounts of unstructured data.' } },
                { id: '4-q3', q: "The ability to support multiple APIs (SQL, MongoDB, etc.) is a feature of:", o: ["Azure SQL DB", "Azure Cosmos DB", "Azure DB for MySQL"], a: { key: 'b', text: 'Azure Cosmos DB', exp: 'The multi-model capability of Cosmos DB allows it to be compatible with various APIs.' } },
                { id: '4-q4', q: "In Azure Cosmos DB, what does the partition key define?", o: ["How data is logically distributed.", "The encryption key.", "The admin username."], a: { key: 'a', text: 'How data is logically distributed.', exp: 'The partition key is crucial in Cosmos DB for distributing data across logical partitions.' } },
                { id: '4-q5', q: "What are the consistency levels offered by Azure Cosmos DB?", o: ["Only strong and eventual.", "Transactional and analytical.", "Strong, bounded staleness, session, consistent prefix, and eventual."], a: { key: 'c', text: 'Strong, bounded staleness, session, consistent prefix, and eventual.', exp: 'Cosmos DB offers five well-defined consistency levels.' } },
                { id: '4-q6', q: "For which use case is Azure Table Storage most suitable?", o: ["Storing simple key-value data.", "Hosting complex VMs.", "Real-time video streaming."], a: { key: 'a', text: 'Storing simple key-value data.', exp: 'Azure Table Storage is ideal for applications that need to store large amounts of simple non-relational data.' } },
                { id: '4-q7', q: "What is the Gremlin API in Azure Cosmos DB used for?", o: ["Relational databases.", "Graph databases.", "Time-series databases."], a: { key: 'b', text: 'Graph databases.', exp: 'The Gremlin API in Cosmos DB is designed to work with graph data models.' } },
                { id: '4-q8', q: "Which service is ideal for 'lift-and-shift' migrations of local file servers?", o: ["Blob Storage", "Data Lake Storage", "Azure Files"], a: { key: 'c', text: 'Azure Files', exp: 'Azure Files provides file shares accessible via the SMB protocol.' } },
                { id: '5-q1', q: "Which tool is used to create interactive data visualizations and dashboards?", o: ["Azure Data Factory", "Power BI", "Azure Databricks"], a: { key: 'b', text: 'Power BI', exp: 'Power BI is Microsoft\'s Business Intelligence tool for creating interactive reports.' } },
                { id: '5-q2', q: "Which service combines data warehousing and Big Data analytics?", o: ["Azure Synapse Analytics", "Azure HDInsight", "Azure Cosmos DB"], a: { key: 'a', text: 'Azure Synapse Analytics', exp: 'Synapse Analytics is an integrated platform that combines Data Warehousing with Big Data analytics.' } },
                { id: '5-q3', q: "The process of extracting, transforming, and loading data is known as:", o: ["OLTP", "Data Mining", "ETL"], a: { key: 'c', text: 'ETL', exp: 'ETL (Extract, Transform, Load) is the standard process for collecting, converting, and loading data.' } },
                { id: '5-q4', q: "What is the main description of Azure Data Factory?", o: ["A service to orchestrate and automate data workflows.", "A telemetry database.", "A geospatial visualization tool."], a: { key: 'a', text: 'A service to orchestrate and automate data workflows.', exp: 'Azure Data Factory is the data integration service for creating, scheduling, and orchestrating ETL/ELT workflows.' } },
                { id: '5-q5', q: "In a data warehouse model, what is a dimension table?", o: ["A table that stores encryption keys.", "A table with descriptive attributes of business data.", "A table that logs system errors."], a: { key: 'b', text: 'A table with descriptive attributes of business data.', exp: 'A dimension table contains the characteristics of a business object (e.g., Customer, Product).' } },
                { id: '5-q6', q: "In a data warehouse model, what is a fact table?", o: ["A table with user names.", "A system configuration table.", "A table with numerical measurements or metrics."], a: { key: 'c', text: 'A table with numerical measurements or metrics.', exp: 'The fact table is the central table in a star schema and contains quantitative data.' } },
                { id: '5-q7', q: "What is the best description of Azure Databricks?", o: ["An Apache Spark-based analytics platform.", "A NoSQL database service.", "An identity management tool."], a: { key: 'a', text: 'An Apache Spark-based analytics platform.', exp: 'Azure Databricks provides an optimized environment for Apache Spark for data engineering and machine learning.' } },
                { id: '5-q8', q: "Which Synapse Analytics technology allows querying external data in-place?", o: ["Stream Analytics", "PolyBase", "Power Automate"], a: { key: 'b', text: 'PolyBase', exp: 'PolyBase is a technology that allows accessing and combining relational and non-relational data from SQL Server without moving it.' } }
            ]
        }
    };

    // ==================================================================================
    // ESTADO Y LÓGICA DEL EXAMEN
    // ==================================================================================

    const CONSTANTS = {
        EXAM_DURATION: 40 * 60,
        TOTAL_QUESTIONS: 40,
        PASSING_SCORE: 700
    };

    let state = {};

    function resetState(lang = 'es') {
        state = {
            currentLanguage: lang,
            timerInterval: null,
            currentQuestions: [],
            userAnswers: {},
            flaggedQuestions: new Set(),
            currentQuestionIndex: 0,
            examFinished: false,
            inReviewMode: false
        };
    }

    // --- Lógica Principal ---

    function getDOMElements() {
        return {
            langSelectionView: document.getElementById('language-selection-view'),
            mainApp: document.getElementById('main-app'),
            examView: document.getElementById('exam-view'),
            reviewView: document.getElementById('review-view'),
            resultsView: document.getElementById('results-view'),
            timerEl: document.getElementById('timer'),
            timerReviewEl: document.getElementById('timer-review'),
            questionTitleEl: document.getElementById('question-title-text'),
            questionContentEl: document.getElementById('question-content'),
            questionCounterEl: document.getElementById('question-counter'),
            flagBtn: document.getElementById('flag-btn'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            reviewBtn: document.getElementById('review-btn'),
            backToReviewBtn: document.getElementById('back-to-review-btn'),
            finalizeBtn: document.getElementById('finalize-btn'),
            restartBtn: document.getElementById('restart-btn'),
            reviewGridEl: document.getElementById('review-grid'),
            scoreSummaryEl: document.getElementById('score-summary'),
            answersReviewEl: document.getElementById('answers-review'),
            examTitle: document.getElementById('exam-title'),
            timerLabel: document.getElementById('timer-label'),
            timerLabelReview: document.getElementById('timer-label-review'),
            reviewTitle: document.getElementById('review-title'),
            reviewInstructions: document.getElementById('review-instructions'),
            resultsTitle: document.getElementById('results-title'),
            answersReviewTitle: document.getElementById('answers-review-title'),
            themeToggleBtn: document.getElementById('theme-toggle-btn'),
            themeToggleBtnReview: document.getElementById('theme-toggle-btn-review')
        };
    }

    function initUI(lang, dom) {
        const ui = translations[lang].ui;
        dom.examTitle.textContent = ui.examTitle;
        dom.timerLabel.textContent = ui.timerLabel;
        dom.timerLabelReview.textContent = ui.timerLabel;
        dom.questionTitleEl.textContent = ui.loadingQuestion;
        dom.flagBtn.innerHTML = ui.flagForReview;
        dom.prevBtn.textContent = ui.previous;
        dom.nextBtn.textContent = ui.next;
        dom.reviewBtn.textContent = ui.reviewExam;
        dom.backToReviewBtn.innerHTML = ui.backToReview;
        dom.reviewTitle.textContent = ui.reviewTitle;
        dom.reviewInstructions.textContent = ui.reviewInstructions;
        dom.finalizeBtn.textContent = ui.finalizeButton;
        dom.resultsTitle.textContent = ui.resultsTitle;
        dom.answersReviewTitle.textContent = ui.answersReviewTitle;
        dom.restartBtn.textContent = ui.tryAgain;
    }

    function selectLanguage(lang, dom) {
        resetState(lang);
        initUI(lang, dom);
        dom.langSelectionView.style.display = 'none';
        dom.mainApp.style.display = 'block';
        startExam(dom);
    }

    function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }

    function startExam(dom) {
        const lang = state.currentLanguage;
        resetState(lang);
        initUI(lang, dom);

        let allQuestions = [...translations[lang].questions];
        shuffleArray(allQuestions);
        const questionCount = Math.min(CONSTANTS.TOTAL_QUESTIONS, allQuestions.length);
        state.currentQuestions = allQuestions.slice(0, questionCount);
        
        showQuestion(state.currentQuestionIndex, dom);
        startTimer(dom);
        
        dom.examView.style.display = 'block';
        dom.reviewView.style.display = 'none';
        dom.resultsView.style.display = 'none';
    }

    function showQuestion(index, dom) {
        const q = state.currentQuestions[index];
        dom.questionTitleEl.textContent = translations[state.currentLanguage].ui.questionOf(index + 1, state.currentQuestions.length);
        const optionsHTML = q.o.map((option, i) => {
            const optionKey = String.fromCharCode(97 + i);
            const isChecked = state.userAnswers[q.id] === optionKey;
            return `<input type="radio" id="option-${optionKey}" name="${q.id}" value="${optionKey}" ${isChecked ? 'checked' : ''}><label for="option-${optionKey}">${option}</label>`;
        }).join('');
        dom.questionContentEl.innerHTML = `<form id="current-question-form"><p>${q.q}</p><div class="question-options">${optionsHTML}</div></form>`;
        updateNavControls(dom);
        updateFlagButtonState(dom);
    }

    function updateNavControls(dom) {
        // Usar visibilidad para evitar que los botones salten
        const questionCount = state.currentQuestions.length;
        const isLastQuestion = state.currentQuestionIndex === questionCount - 1;

        dom.prevBtn.style.visibility = state.currentQuestionIndex === 0 ? 'hidden' : 'visible';
        dom.nextBtn.style.visibility = isLastQuestion ? 'hidden' : 'visible';
        dom.reviewBtn.style.visibility = isLastQuestion ? 'visible' : 'hidden';
        dom.backToReviewBtn.style.visibility = state.inReviewMode ? 'visible' : 'hidden';

        if (state.inReviewMode) {
            dom.prevBtn.style.visibility = 'hidden';
            dom.nextBtn.style.visibility = 'hidden';
            dom.reviewBtn.style.visibility = 'hidden';
            dom.questionCounterEl.style.visibility = 'hidden';
        } else {
            dom.questionCounterEl.style.visibility = 'visible';
            dom.questionCounterEl.textContent = translations[state.currentLanguage].ui.questionOf(state.currentQuestionIndex + 1, questionCount);
        }
    }

    function saveAnswer() {
        const currentQuestion = state.currentQuestions[state.currentQuestionIndex];
        const form = document.getElementById('current-question-form');
        if (form) {
            const formData = new FormData(form);
            const answer = formData.get(currentQuestion.id);
            if (answer) { state.userAnswers[currentQuestion.id] = answer; }
        }
    }

    function toggleFlag(dom) {
        const currentQuestionId = state.currentQuestions[state.currentQuestionIndex].id;
        if (state.flaggedQuestions.has(currentQuestionId)) { state.flaggedQuestions.delete(currentQuestionId); } else { state.flaggedQuestions.add(currentQuestionId); }
        updateFlagButtonState(dom);
    }

    function updateFlagButtonState(dom) {
        const currentQuestionId = state.currentQuestions[state.currentQuestionIndex].id;
        const ui = translations[state.currentLanguage].ui;
        if (state.flaggedQuestions.has(currentQuestionId)) { dom.flagBtn.classList.add('flagged'); dom.flagBtn.innerHTML = ui.flagged; }
        else { dom.flagBtn.classList.remove('flagged'); dom.flagBtn.innerHTML = ui.flagForReview; }
    }

    function showReviewScreen(dom) {
        state.inReviewMode = false;
        saveAnswer();
        dom.examView.style.display = 'none';
        dom.reviewView.style.display = 'block';
        dom.reviewGridEl.innerHTML = '';
        state.currentQuestions.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'review-item';
            item.textContent = index + 1;
            if (state.userAnswers[q.id]) { item.classList.add('answered'); }
            if (state.flaggedQuestions.has(q.id)) { item.classList.add('flagged'); }
            item.addEventListener('click', () => jumpToQuestion(index, dom));
            dom.reviewGridEl.appendChild(item);
        });
    }

    function jumpToQuestion(index, dom) {
        state.inReviewMode = true;
        dom.reviewView.style.display = 'none';
        dom.examView.style.display = 'block';
        state.currentQuestionIndex = index;
        showQuestion(index, dom);
    }

    function startTimer(dom) {
        let timeLeft = CONSTANTS.EXAM_DURATION;
        const timers = [dom.timerEl, dom.timerReviewEl];
        clearInterval(state.timerInterval);
        state.timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            timers.forEach(t => t.textContent = timeString);
            if (timeLeft <= 60) { timers.forEach(t => t.classList.add('ending')); }
            if (timeLeft <= 0) { finishExam(dom); }
        }, 1000);
    }

    function finishExam(dom) {
        if (state.examFinished) return;
        state.examFinished = true;
        clearInterval(state.timerInterval);
        saveAnswer();
        let correctCount = 0;
        state.currentQuestions.forEach(q => { if (state.userAnswers[q.id] === q.a.key) { correctCount++; } });
        const score = Math.round((correctCount / state.currentQuestions.length) * 1000);
        renderResults(score, dom);
    }

    function renderResults(score, dom) {
        dom.examView.style.display = 'none';
        dom.reviewView.style.display = 'none';
        dom.resultsView.style.display = 'block';
        const ui = translations[state.currentLanguage].ui;
        const passed = score >= CONSTANTS.PASSING_SCORE;
        dom.scoreSummaryEl.className = passed ? 'pass' : 'fail';
        dom.scoreSummaryEl.innerHTML = `<span class="score">${ui.score(score)}</span><p>${passed ? ui.passed : ui.notPassed}</p>`;
        let reviewHTML = '<ul>';
        state.currentQuestions.forEach((q, index) => {
            const userAnswerKey = state.userAnswers[q.id];
            const isCorrect = userAnswerKey === q.a.key;
            const userAnswerText = userAnswerKey ? q.o[userAnswerKey.charCodeAt(0) - 97] : ui.notAnswered;
            reviewHTML += `
                <li class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                    <p class="question-title">${index + 1}. ${q.q} ${state.flaggedQuestions.has(q.id) ? ui.flaggedMarker : ''}</p>
                    <p class="user-answer ${isCorrect ? '' : 'incorrect'}">${ui.yourAnswer} ${userAnswerText}</p>
                    ${!isCorrect ? `<p class="correct-answer-text">${ui.correctAnswer} ${q.a.text}</p>` : ''}
                    <p><em><b>${ui.explanation}</b> ${q.a.exp}</em></p>
                </li>
            `;
        });
        reviewHTML += '</ul>';
        dom.answersReviewEl.innerHTML = reviewHTML;
    }

    function toggleTheme(dom) {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        const icon = isDarkMode ? '☀️' : '🌙';
        dom.themeToggleBtn.textContent = icon;
        dom.themeToggleBtnReview.textContent = icon;
    }

    function applyInitialTheme(dom) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            dom.themeToggleBtn.textContent = '☀️';
            dom.themeToggleBtnReview.textContent = '☀️';
        }
    }

    // --- Inicialización ---
    function main() {
        const dom = getDOMElements();
        applyInitialTheme(dom);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                selectLanguage(e.target.dataset.lang, dom);
            });
        });

        dom.flagBtn.addEventListener('click', () => toggleFlag(dom));
        dom.nextBtn.addEventListener('click', () => { saveAnswer(); if (state.currentQuestionIndex < state.currentQuestions.length - 1) { state.currentQuestionIndex++; showQuestion(state.currentQuestionIndex, dom); } });
        dom.prevBtn.addEventListener('click', () => { saveAnswer(); if (state.currentQuestionIndex > 0) { state.currentQuestionIndex--; showQuestion(state.currentQuestionIndex, dom); } });
        dom.reviewBtn.addEventListener('click', () => showReviewScreen(dom));
        dom.backToReviewBtn.addEventListener('click', () => showReviewScreen(dom));
        dom.finalizeBtn.addEventListener('click', () => finishExam(dom));
        dom.restartBtn.addEventListener('click', () => startExam(dom));
        dom.themeToggleBtn.addEventListener('click', () => toggleTheme(dom));
        dom.themeToggleBtnReview.addEventListener('click', () => toggleTheme(dom));
    }

    main();
});
