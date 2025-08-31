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
                flaggedMarker: " (🚩 Marcada)",
                tryAgain: "Intentar de Nuevo",
                questionOf: (index, total) => `Pregunta ${index} de ${total}`
            },
            questions: preguntasRespuestas_es
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
            questions: [
  {
    "id": "en-1",
    "q": "A Microsoft Power BI [...] enables users to create highly formatted, fixed-layout documents archiving.",
    "o": [
      "dashboard.",
      "interactive report.",
      "paginated report.",
      "subscription."
    ],
    "a": {
      "key": "c",
      "text": "paginated report.",
      "exp": ""
    }
  },
  {
    "id": "en-2",
    "q": "Platform as a service (PaaS) database offerings in Azure provide built-in high availability.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-3",
    "q": "Platform as a service (PaaS) database offerings in Azure provite configuration scaling options.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-4",
    "q": "Platform as a service (PaaS) database offerings in Azure reduce the administrative overhead for managing hardware.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-5",
    "q": "Which scenario is an example of a streaming workload?",
    "o": [
      "Sending transactions that are older than a month to an archive.",
      "Sending transactions daily from point of sale (POS) devices.",
      "Sending telemetry data from edge devices.",
      "Sending cloud infrastructure metadata every 30 minutes."
    ],
    "a": {
      "key": "c",
      "text": "Sending telemetry data from edge devices.",
      "exp": ""
    }
  },
  {
    "id": "en-6",
    "q": "Stream processing has access to the most recent data received or data within a rolling time window.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-7",
    "q": "Batch processing must occur immediately and have latency in the order of second or milliseconds.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-8",
    "q": "Stream processing in used for simple response functions, aggregates, or calculations such as rolling averages.",
    "o": [
      "Yes.",
      "no."
    ],
    "a": {
      "key": "b",
      "text": "no.",
      "exp": ""
    }
  },
  {
    "id": "en-9",
    "q": "You are deploying a software as a service (SaaS) application that requires a relational database for Online Transaction Processing (OLTP). Which Azure service should you use to support the application?",
    "o": [
      "Azure Cosmos D3.",
      "Azure Synapse Analytics.",
      "Azure HCMmtghi.",
      "Azure SQL Database."
    ],
    "a": {
      "key": "d",
      "text": "Azure SQL Database.",
      "exp": ""
    }
  },
  {
    "id": "en-10",
    "q": "Extract, transform, and load (ETL) can reduce the transfer of sensitive data to destination systems.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-11",
    "q": "Extract, load, and transform (ELT) transforms data by using a compute resource independent of the source system and destination system.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-12",
    "q": "Extract, load, and transform (ELT) minimizes the time it takes to copy large volumes of data to destination systems.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-13",
    "q": "You need to recommend a data store service that meets the following requirements: Native SQL API access. Configurable indexes. What should you recommend?",
    "o": [
      "Azure FilesB.",
      "Azure Blob storageC.",
      "Azure Table storageD.",
      "Azure Cosmos DB."
    ],
    "a": {
      "key": "d",
      "text": "Azure Cosmos DB.",
      "exp": ""
    }
  },
  {
    "id": "en-14",
    "q": "Batch processing can output data to a file store.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-15",
    "q": "Batch processing can output data to a relational database.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-16",
    "q": "Batch processing can output data to a NoSQL database.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-17",
    "q": "What is a benefit of hosting a database on Azure SQL managed instance as compared to an Azure SQL database?",
    "o": [
      "Native support for cross-database queries and transactions.",
      "Built-in high availability.",
      "System-Initiated automatic backups.",
      "Support for encryption at rest."
    ],
    "a": {
      "key": "a",
      "text": "Native support for cross-database queries and transactions.",
      "exp": ""
    }
  },
  {
    "id": "en-18",
    "q": "A team of developers has computers Thai run Windows 10 and Ubuntu Desktop. The developers need to connect to and query an Azure SQL database from the computers. The developers require code assistance features such as intellSense. What should the developers use?",
    "o": [
      "Azure Data Studio.",
      "Sq1cmdC.",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Explorer."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Studio.",
      "exp": ""
    }
  },
  {
    "id": "en-19",
    "q": "Batch workloads [...].",
    "o": [
      "process data in memory, row-by-row.",
      "collect and process data at most once a day.",
      "process data as new data is received in near real-time.",
      "collect data and then process the data when a condition is met."
    ],
    "a": {
      "key": "d",
      "text": "collect data and then process the data when a condition is met.",
      "exp": ""
    }
  },
  {
    "id": "en-20",
    "q": "A block of code that runs In a database Is callea [...].",
    "o": [
      "a stored procedure.",
      "a table.",
      "a view.",
      "an index."
    ],
    "a": {
      "key": "a",
      "text": "a stored procedure.",
      "exp": ""
    }
  },
  {
    "id": "en-21",
    "q": "Match the types of activities to the appropriate Azure Data Factory activities.",
    "o": [
      "Copy: Data movement. Mapping data flow: Data transformation. Until: Control.",
      "Copy: Data transformation. Mapping data flow: Data movement. Until: Control.",
      "Copy: Data movement. Mapping data flow: Control. Until: Data transformation.",
      "Copy: Data transformation. Mapping data flow: Control. Until: Data movement."
    ],
    "a": {
      "key": "a",
      "text": "Copy: Data movement. Mapping data flow: Data transformation. Until: Control.",
      "exp": ""
    }
  },
  {
    "id": "en-22",
    "q": "You have the following SQL query. INSERT INTO dbo.Products (ProductID, ProductName, Price, ProductDescription) Values (1,'Calmp',12.48,'Workbench clamp');",
    "o": [
      "Dbo.Products: A table. ProductName: A column.",
      "Dbo.Products: A table. ProductName: An index.",
      "Dbo.Products: An index. ProductName: A database.",
      "Dbo.Products: A database. ProductName: A table."
    ],
    "a": {
      "key": "a",
      "text": "Dbo.Products: A table. ProductName: A column.",
      "exp": ""
    }
  },
  {
    "id": "en-23",
    "q": "Relational data is stored in [...].",
    "o": [
      "A file system as unstructured data.",
      "A hierarchal folder structure.",
      "A tabular form of rows and columns.",
      "Comma-separated value (CSV) files."
    ],
    "a": {
      "key": "c",
      "text": "A tabular form of rows and columns.",
      "exp": ""
    }
  },
  {
    "id": "en-24",
    "q": "A key/value data store is optimized for [...].",
    "o": [
      "Enforcing constraints.",
      "Simple lookups.",
      "Table joins.",
      "Transactions.."
    ],
    "a": {
      "key": "b",
      "text": "Simple lookups.",
      "exp": ""
    }
  },
  {
    "id": "en-25",
    "q": "Azure Data Studio can be used to query an Azure SQL database from a device that runs macOS.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-26",
    "q": "Microsoft SQL Server Management Studio (SSMS) enables users to create and use SQL notebooks.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-27",
    "q": "Azure Data Studio can be used to restore a database.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-28",
    "q": "Which command should you run?",
    "o": [
      "Az scorage share create.",
      "Az scorage account creace.",
      "Az cosmosdb creace.",
      "Az scorage concainer creace."
    ],
    "a": {
      "key": "d",
      "text": "Az scorage concainer creace.",
      "exp": ""
    }
  },
  {
    "id": "en-29",
    "q": "Which Azure service should you use?",
    "o": [
      "Azure Cosmos DB.",
      "Azure Table storage.",
      "Azure Files.",
      "Azure Blob Storage."
    ],
    "a": {
      "key": "a",
      "text": "Azure Cosmos DB.",
      "exp": ""
    }
  },
  {
    "id": "en-30",
    "q": "At which two levels can you set the throughput for an Azure Cosmos DB account?",
    "o": [
      "Container.",
      "Item.",
      "Database.",
      "Partition."
    ],
    "a": {
      "key": [
        "a",
        "c"
      ],
      "text": [
        "Container.",
        "Database."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-31",
    "q": "You need to create a visualization of running sales totals per quarter as shown in the following exhibit. What should you create in Power BI Desktop?",
    "o": [
      "A waterfall chart.",
      "A ribbon chart",
      "A bar chart.",
      "A decomposition tree."
    ],
    "a": {
      "key": "a",
      "text": "A waterfall chart.",
      "exp": ""
    }
  },
  {
    "id": "en-32",
    "q": "Physically sorts the data in a table based on the values in specified column [...].",
    "o": [
      "A view.",
      "A clustered index.",
      "A stored procedure.",
      "A nonclustered index."
    ],
    "a": {
      "key": "b",
      "text": "A clustered index.",
      "exp": ""
    }
  },
  {
    "id": "en-33",
    "q": "In an object associated with a table that sorts and stores the data rows in the table based on their ket values [...].",
    "o": [
      "A clustered index.",
      "A FileTable.",
      "A foreing key.",
      "A stored procedure."
    ],
    "a": {
      "key": "a",
      "text": "A clustered index.",
      "exp": ""
    }
  },
  {
    "id": "en-34",
    "q": "A job that processes sales data once daily in na example of a batch workload.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-35",
    "q": "A job that calculates a rolling average temperature readling in an example of a streaming workload.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-36",
    "q": "A job that calculates average revenue per product for the last month in an example pf a streaming workload.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-37",
    "q": "You have a quality assurance application that reads data from a data warehouse. Which type of processing does the application use?",
    "o": [
      "Online Transaction Processing (OLTP)",
      "Batch processing.",
      "Online Analytical Processing (OLAP).",
      "Stream processing."
    ],
    "a": {
      "key": "a",
      "text": "Online Transaction Processing (OLTP)",
      "exp": ""
    }
  },
  {
    "id": "en-38",
    "q": "Your company needs to design a database that shows how changes traffic in one area of a network affect other components on the network. Which type of data store should you use?",
    "o": [
      "Key/value.",
      "Graph.",
      "Documentd.",
      "Columnar."
    ],
    "a": {
      "key": "b",
      "text": "Graph.",
      "exp": ""
    }
  },
  {
    "id": "en-39",
    "q": "You need to store data in Azure Blob storage for seven years to meet your company’s compliance requirements. The retrieval time of the data is unimportant. The solution must minimize storage costs. Which storage tier should you use?",
    "o": [
      "Archive.",
      "Hot.",
      "Cool."
    ],
    "a": {
      "key": "a",
      "text": "Archive.",
      "exp": ""
    }
  },
  {
    "id": "en-40",
    "q": "To configure an Azure Storage account to support both security at the folder level and atomic directory manipulation [...].",
    "o": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "a": {
      "key": "a",
      "text": "Enable the hierarchical namespace.",
      "exp": ""
    }
  },
  {
    "id": "en-41",
    "q": "Match the security components to the appropriate scenarios.",
    "o": [
      "Prevent access to an Azure SQL database from another network: Encryption. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Firewall. Ensure that sensitive data never appears as plain text in an Azure SQL database: Authentication.",
      "Prevent access to an Azure SQL database from another network: Authentication. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Firewall. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
      "Prevent access to an Azure SQL database from another network: Firewall. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Authentication. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
      "Prevent access to an Azure SQL database from another network: Authentication. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Encryption. Ensure that sensitive data never appears as plain text in an Azure SQL database: Firewall."
    ],
    "a": {
      "key": "c",
      "text": "Prevent access to an Azure SQL database from another network: Firewall. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Authentication. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
      "exp": ""
    }
  },
  {
    "id": "en-42",
    "q": "You can use Azure Data Studio to query a Microsoft SQL Server big data cluster.",
    "o": [
      "You.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "You.",
      "exp": ""
    }
  },
  {
    "id": "en-43",
    "q": "You can use Microsoft SQL Server Management Studio (SSMS) to query an Azure Synapse Analytics data warehouse.",
    "o": [
      "Yes",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes",
      "exp": ""
    }
  },
  {
    "id": "en-44",
    "q": "You can use MySQL Workbench to query Azure Database for MariaDB databases.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-45",
    "q": "A relational database is appropriate for scenarios that involve a high volume of [...].",
    "o": [
      "changes to realtionships between entites.",
      "geographically distributed writes.",
      "transactional writes.",
      "writes that have varying data structures."
    ],
    "a": {
      "key": "c",
      "text": "transactional writes.",
      "exp": ""
    }
  },
  {
    "id": "en-46",
    "q": "The Azure Cosmos DB API in configured separately for each database in an Azure Cosmos DB account.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-47",
    "q": "Partition keys are used in Azure Cosmos DB to opyimize queries.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-48",
    "q": "Items contained in the same Azure Cosmos DB logical partition can have different partition keys.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-49",
    "q": "You need to gather real-time telemetry data from a mobile application. Which type of workload describes this scenario?",
    "o": [
      "Online Transaction Processing (OLTP).",
      "Batch.",
      "Massively parallel processing (MPP).",
      "Streaming."
    ],
    "a": {
      "key": "d",
      "text": "Streaming.",
      "exp": ""
    }
  },
  {
    "id": "en-50",
    "q": "Which statement should you use in a SQL query to change the inventory quantity of Product1 to 270?",
    "o": [
      "INSERT.",
      "MERGE.",
      "UPDATE.",
      "CREATE."
    ],
    "a": {
      "key": "c",
      "text": "UPDATE.",
      "exp": ""
    }
  },
  {
    "id": "en-51",
    "q": "Match the types of data stores to the appropriate scenarios. [...] Application users and their and default language.",
    "o": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "a": {
      "key": "c",
      "text": "Key/value.",
      "exp": ""
    }
  },
  {
    "id": "en-52",
    "q": "Match the types of data stores to the appropriate scenarios. [...] Medical images and their associated metadata.",
    "o": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "a": {
      "key": "b",
      "text": "Object.",
      "exp": ""
    }
  },
  {
    "id": "en-53",
    "q": "Match the types of data stores to the appropriate scenarios. [...] Employee data that shows the realtionships between employees.",
    "o": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "a": {
      "key": "a",
      "text": "Graph.",
      "exp": ""
    }
  },
  {
    "id": "en-54",
    "q": "Which type of non-relational data store supports a flexible schema, stores data as JSON files, and stores the all the data for an entity in the same document?",
    "o": [
      "Document.",
      "Columnar.",
      "Graph.",
      "Time series."
    ],
    "a": {
      "key": "a",
      "text": "Document.",
      "exp": ""
    }
  },
  {
    "id": "en-55",
    "q": "Azure Table storage supports multiple read replicas.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-56",
    "q": "Azure Table storage supports multiple write regions.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-57",
    "q": "The Azure Cosmos DB Table API supports multiple read replicas.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-58",
    "q": "The Azure Cosmos DB Table API supports multiple write regions.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-59",
    "q": "Match the types of workloads the appropriate scenario. [...] Data for a product catalog vail be loaded every 12 hours to a data warehouse.",
    "o": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "a": {
      "key": "a",
      "text": "Batch.",
      "exp": ""
    }
  },
  {
    "id": "en-60",
    "q": "Match the types of workloads the appropriate scenario. [...] Data for online purchases will be loaded to a Gata warehouse as the purchases occur.",
    "o": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "a": {
      "key": "c",
      "text": "Streaming.",
      "exp": ""
    }
  },
  {
    "id": "en-61",
    "q": "Match the types of workloads the appropriate scenario. Updates to inventory data will be loaded to adata warehouse every 1,000 transactions.",
    "o": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "a": {
      "key": "b",
      "text": "Micro-batch",
      "exp": ""
    }
  },
  {
    "id": "en-62",
    "q": "Your company needs to implement a relational database in Azure. The solution must minimize ongoing maintenance. Which Azure service should you use?",
    "o": [
      "Azure HDInsight.",
      "Azure SQL Database.",
      "Azure Cosmos DB.",
      "SQL Server on Azure virtual machines."
    ],
    "a": {
      "key": "b",
      "text": "Azure SQL Database.",
      "exp": ""
    }
  },
  {
    "id": "en-63",
    "q": "Which Azure SQL offering supports automatic database scaling and automatic pausing of the database during inactive periods?",
    "o": [
      "Azure SQL Database Hyperscale.",
      "Azure SQL managed instance.",
      "Azure SQL Database serveless.",
      "Azure SQL Database elastic pod."
    ],
    "a": {
      "key": "b",
      "text": "Azure SQL managed instance.",
      "exp": ""
    }
  },
  {
    "id": "en-64",
    "q": "Which component of Azure Data Factory enables you to define a sequence of activities including for each iterators?",
    "o": [
      "Control flow.",
      "Linked services.",
      "Datasets.",
      "The integration runtime."
    ],
    "a": {
      "key": "a",
      "text": "Control flow.",
      "exp": ""
    }
  },
  {
    "id": "en-65",
    "q": "You are writing a set of SQL queries that administrators will use to troubleshoot an Azure SQL database. You need to embed documents and query results into a SQL notebook. What should you use?",
    "o": [
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Studio.",
      "Azure CLID.",
      "Azure PowerShell."
    ],
    "a": {
      "key": "b",
      "text": "Azure Data Studio.",
      "exp": ""
    }
  },
  {
    "id": "en-66",
    "q": "What are three characteristics of an Online Transaction Processing (OLTP) workload?",
    "o": [
      "Denormalized data.",
      "Heavy writes and moderate reads.",
      "Light writes and heavy reads.",
      "Schema on write.",
      "Schema on read.",
      "Normalized data."
    ],
    "a": {
      "key": [
        "b",
        "d",
        "f"
      ],
      "text": [
        "Heavy writes and moderate reads.",
        "Schema on write.",
        "Normalized data."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-67",
    "q": "What are two uses of data visualization?",
    "o": [
      "Represent trends and patterns over time.",
      "Communicate the significance of data.",
      "Implement machine learning to predict future values.",
      "Consistently implement business logic across reports."
    ],
    "a": {
      "key": [
        "a",
        "b"
      ],
      "text": [
        "Represent trends and patterns over time.",
        "Communicate the significance of data."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-68",
    "q": "Your company recently reported sales from the third quarter. You have the chart shown in the following exhibit. Which type of analysis is shown for the fourth quarter?",
    "o": [
      "Predictive.",
      "Prescription.",
      "Descriptive.",
      "Diagnostic"
    ],
    "a": {
      "key": "a",
      "text": "Predictive.",
      "exp": ""
    }
  },
  {
    "id": "en-69",
    "q": "Which three actions are used when performing diagnostic analytics?",
    "o": [
      "Identify data anomalies. Collect anomaly-related data. Discover relationships and trends that explain anomalies.",
      "Identify data anomalies. Predict when anomalies are likely to recur. Use analytical tools such as decision trees and regression.",
      "Apply serf-learning loops to draw inferences from anomalies. Predict when anomalies are likely to recur. Use analytical tools such as decision trees and regression.",
      "Identify data anomalies. Use machine learning to find patterns in large datasets. Discover relationships and trends that explain anomalies."
    ],
    "a": {
      "key": "a",
      "text": "Identify data anomalies. Collect anomaly-related data. Discover relationships and trends that explain anomalies.",
      "exp": ""
    }
  },
  {
    "id": "en-70",
    "q": "Platform as a service (PaaS) database offerings in Azure require less setup and configuration effort than infrastructure as a service (IaaS) database offerings.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-71",
    "q": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control and update the operating system version.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-72",
    "q": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-73",
    "q": "You need to perform hybrid transactional and analytical processing (HTAP) queries against Azure Cosmos DB data sources by using Azure Synapse Analytics. What should you use?",
    "o": [
      "Synapse pipelines.",
      "A Synapse SQL pool.",
      "Synapse Link.",
      "Synapse Studio."
    ],
    "a": {
      "key": "c",
      "text": "Synapse Link.",
      "exp": ""
    }
  },
  {
    "id": "en-74",
    "q": "A [...] in a chcat of colored rectangles. The size of the rectangles represent the relative value of each item. The chart can be hierarchical, displaying data as a set of rectangles nest within the main rectangle.",
    "o": [
      "line chart.",
      "matrix.",
      "scatter.",
      "treemap."
    ],
    "a": {
      "key": "d",
      "text": "treemap.",
      "exp": ""
    }
  },
  {
    "id": "en-75",
    "q": "You need to design and model a database by using a graphical tool that supports project-oriented offline database development. What should you use?",
    "o": [
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Databricks.",
      "Azure Data Studio."
    ],
    "a": {
      "key": "a",
      "text": "Microsoft SQL Server Data Tools (SSDT).",
      "exp": ""
    }
  },
  {
    "id": "en-76",
    "q": "What are two benefits of platform as a service (PaaS) relational database offerings in Azure, such as Azure SQL Database?",
    "o": [
      "Complete control over backup and restore processes.",
      "Access to the latest features.",
      "In-database machine learning services.",
      "Reduced administrative effort for managing the server infrastructure."
    ],
    "a": {
      "key": [
        "b",
        "d"
      ],
      "text": [
        "Access to the latest features.",
        "Reduced administrative effort for managing the server infrastructure."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-77",
    "q": "Which statement is an example of Data Definition Language (DDL)?",
    "o": [
      "SELECT.",
      "INSERT.",
      "DELETE.",
      "DROP."
    ],
    "a": {
      "key": "d",
      "text": "DROP.",
      "exp": ""
    }
  },
  {
    "id": "en-78",
    "q": "Azure Databricks is an Apache Spark-based collaborative analytics platform.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-79",
    "q": "Azure Analysis Services is used for transactional workloads.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-80",
    "q": "Azure Data Factory orchestrates data integration workflows.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-81",
    "q": "Which statement is an example of Data Manipulation Language (DML)?",
    "o": [
      "REVOKE.",
      "DISABLE.",
      "CREATE.",
      "UPDATE."
    ],
    "a": {
      "key": "d",
      "text": "UPDATE.",
      "exp": ""
    }
  },
  {
    "id": "en-82",
    "q": "Which Azure storage solution provides native support for POSIX-compliant access control lists (ACLs)?",
    "o": [
      "Azure Queue storage.",
      "Azure Data Lake Storage.",
      "Azure table storage.",
      "Azure Files."
    ],
    "a": {
      "key": "b",
      "text": "Azure Data Lake Storage.",
      "exp": ""
    }
  },
  {
    "id": "en-83",
    "q": "Which setting can only be configured during the creation of an Azure Cosmos DB account?",
    "o": [
      "Geo-redundancy.",
      "Multi-region writes.",
      "Production or non-reduction account type.",
      "API."
    ],
    "a": {
      "key": "d",
      "text": "API.",
      "exp": ""
    }
  },
  {
    "id": "en-84",
    "q": "You have an application that runs on Windows and requires across to a mapped drive. Which Azure service should you use?",
    "o": [
      "Azure Files.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Blob Storage."
    ],
    "a": {
      "key": "c",
      "text": "Azure Cosmos DB.",
      "exp": ""
    }
  },
  {
    "id": "en-85",
    "q": "[...] is a virtual table that contains content definey by a querty.",
    "o": [
      "A heap.",
      "A stored procedure.",
      "A view.",
      "An index."
    ],
    "a": {
      "key": "c",
      "text": "A view.",
      "exp": ""
    }
  },
  {
    "id": "en-86",
    "q": "What is the primary purpose of a data warehouse?",
    "o": [
      "To provide answers to complex queries that rely on data from multiple sources.",
      "To provide transformation services between source and target data stores.",
      "To provide read-only storage of relational and non-relational historical data.",
      "To provide storage for transactional line-of-business (LOB) applications."
    ],
    "a": {
      "key": "c",
      "text": "To provide read-only storage of relational and non-relational historical data.",
      "exp": ""
    }
  },
  {
    "id": "en-87",
    "q": "Which storage solution supports access control lists (ACLs) at the file and folder level?",
    "o": [
      "Azure Data Lake Storage.",
      "Azure Cosmos DB.",
      "Azure Queue storage.",
      "Azure Blob storage."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Lake Storage.",
      "exp": ""
    }
  },
  {
    "id": "en-88",
    "q": "Azure SQL managed instance supports cross-database queries.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-89",
    "q": "Azure SQL managed instance supports user-created backups.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-90",
    "q": "Azure SQL managed instance databases can be restored to SQL Server on a Azure virtual machine.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-91",
    "q": "A representation of data structures within data stores.",
    "o": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "a": {
      "key": "b",
      "text": "Dataset.",
      "exp": ""
    }
  },
  {
    "id": "en-92",
    "q": "The information used to connect to external resources:",
    "o": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "a": {
      "key": "c",
      "text": "Linked service.",
      "exp": ""
    }
  },
  {
    "id": "en-93",
    "q": "A logical grouping of activities that performs a unit of work and can be scheduled.",
    "o": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "a": {
      "key": "a",
      "text": "Pipeline.",
      "exp": ""
    }
  },
  {
    "id": "en-94",
    "q": "Which Azure Data Factory component provides the compute environment for activities?",
    "o": [
      "A linked service.",
      "An integration runtime.",
      "A control flow.",
      "A pipeline."
    ],
    "a": {
      "key": "b",
      "text": "An integration runtime.",
      "exp": ""
    }
  },
  {
    "id": "en-95",
    "q": "You have an application that runs on Windows and requires access to a mapped drive. Which Azure service should you use?",
    "o": [
      "Azure Files.",
      "Azure Blob storage.",
      "Azure Cosmos DB.",
      "Azure Table storage."
    ],
    "a": {
      "key": "a",
      "text": "Azure Files.",
      "exp": ""
    }
  },
  {
    "id": "en-96",
    "q": "Match the types of analytics that can be used to answer the business questions.",
    "o": [
      "Why did sales increase last month?: Cognitive. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Prescriptive.",
      "Why did sales increase last month?: Diagnostic. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Cognitive.",
      "Why did sales increase last month?: Descriptive. How do I allocate my budget to buy different inventory items?: Prescriptive. Which people are mentioned in a company's business documents?: Predictive.",
      "Why did sales increase last month?: Predictive. How do I allocate my budget to buy different inventory items?: Prescriptive. Which people are mentioned in a company's business documents?: Diagnostic."
    ],
    "a": {
      "key": "b",
      "text": "Why did sales increase last month?: Diagnostic. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Cognitive.",
      "exp": ""
    }
  },
  {
    "id": "en-97",
    "q": "Match the Azure services to the appropriate locations in the architecture.",
    "o": [
      "Ingest: Azure Data Factory. Preprocess & model: Azure Synapse Analytics.",
      "Ingest: Azure Data Factory. Preprocess & model: Azure Cognitive Search.",
      "Ingest: Azure Synapse Analytics. Preprocess & model: Azure Cognitive Search.",
      "Ingest: Azure Cognitive Search. Preprocess & model: Azure Synapse Analytics."
    ],
    "a": {
      "key": "a",
      "text": "Ingest: Azure Data Factory. Preprocess & model: Azure Synapse Analytics.",
      "exp": ""
    }
  },
  {
    "id": "en-98",
    "q": "You must apply patches to Azure SQL databases regularly,",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-99",
    "q": "You need a Microsoft 365 subscription to create an Azure SQL database.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-100",
    "q": "You can use existing Microsoft SQL Server licenses to reduce the cost of Azure SQL databases.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-101",
    "q": "If you have a platform as a service (PaaS) database in Azure, you are responsible for applying operating system updates.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-102",
    "q": "If you have a platform as a service (PaaS) database in Azure, backups are performed automatically.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-103",
    "q": "If you have a platform as a service (PaaS) database in Azure, you are responsible for upgrading the database engine.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-104",
    "q": "A visualization that shows a university's current student enrollment versus the maximum capacity is an example of [...] analytics.",
    "o": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "a": {
      "key": "b",
      "text": "descriptive.",
      "exp": ""
    }
  },
  {
    "id": "en-105",
    "q": "Match the Azure Data Lake Storage terms to the appropriate levels in the hierarchy.",
    "o": [
      "Box 1: File system. Box 2: File share.",
      "Box 1: Azure Storage account. Box 2: File system.",
      "Box 1: File share. Box 2: File system.",
      "Box 1: Azure Storage account. Box 2: File share."
    ],
    "a": {
      "key": "d",
      "text": "Box 1: Azure Storage account. Box 2: File share.",
      "exp": ""
    }
  },
  {
    "id": "en-106",
    "q": "You can copy a dashboard between Microsoft Power BI workspaces.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-107",
    "q": "A Microsoft Power BI dashboard can only display visualizations from a single dataset.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-108",
    "q": "A Microsoft Power BY dashboard can display visualizations from a Microsoft Excel workbook.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-109",
    "q": "You can query a graph database in Azure Cosmos DB [...].",
    "o": [
      "as a JSON document by using a SQL-like language.",
      "as a partitioned row store by using Cassandra Query Language (CQL).",
      "as a partitioned row store by using Language-Integrated Query (LINQ).",
      "as nodes and edges by using the Gremlin language."
    ],
    "a": {
      "key": "a",
      "text": "as a JSON document by using a SQL-like language.",
      "exp": ""
    }
  },
  {
    "id": "en-110",
    "q": "At which level in Azure Cosmos DB can you configure multiple write regions and read regions?",
    "o": [
      "database.",
      "partition.",
      "collection.",
      "account."
    ],
    "a": {
      "key": "c",
      "text": "collection.",
      "exp": ""
    }
  },
  {
    "id": "en-111",
    "q": "Extract Trandform Load (ETL).",
    "o": [
      "Azure Analysis Services.",
      "Azure Data Factory.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Synapse Analytics."
    ],
    "a": {
      "key": "b",
      "text": "Azure Data Factory.",
      "exp": ""
    }
  },
  {
    "id": "en-112",
    "q": "Data warehouse.",
    "o": [
      "Azure Analysis Services.",
      "Azure Data Factory.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Synapse Analytics."
    ],
    "a": {
      "key": "e",
      "text": "Azure Synapse Analytics.",
      "exp": ""
    }
  },
  {
    "id": "en-113",
    "q": "Which storage solution supports role-based access control (RBAC) at the file and folder level?",
    "o": [
      "Azure Disk Storage.",
      "Azure Data Lake Storage.",
      "Azure Blob storage.",
      "Azure Queue storage."
    ],
    "a": {
      "key": "b",
      "text": "Azure Data Lake Storage.",
      "exp": ""
    }
  },
  {
    "id": "en-114",
    "q": "What should you use in Microsoft Power BI?",
    "o": [
      "A dashboard.",
      "Microsoft Power Apps.",
      "A dataflow.",
      "A report."
    ],
    "a": {
      "key": "d",
      "text": "A report.",
      "exp": ""
    }
  },
  {
    "id": "en-115",
    "q": "The massively parallel processing (MPP) engine of Azure Synapse Analytics [...].",
    "o": [
      "distributes processing across compute nodes.",
      "distributes processing across control nodes.",
      "redirects client connections across compute nodes.",
      "redirects client connections across control nodes."
    ],
    "a": {
      "key": "a",
      "text": "distributes processing across compute nodes.",
      "exp": ""
    }
  },
  {
    "id": "en-116",
    "q": "An extract, transform, and load (ETL) process requires [...].",
    "o": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "a": {
      "key": "b",
      "text": "a target data store powerful enough to transform data.",
      "exp": ""
    }
  },
  {
    "id": "en-117",
    "q": "Which two Azure services can be used to provision Apache Spark clusters?",
    "o": [
      "Azure Time Series Insights.",
      "Azure HDInsight.",
      "Azure Databricks.",
      "Azure Log Analytics."
    ],
    "a": {
      "key": [
        "b",
        "c"
      ],
      "text": [
        "Azure HDInsight.",
        "Azure Databricks."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-118",
    "q": "You manage an application that stores data in a shared folder on a Windows server. You need to move the shared folder to Azure Storage. Which type of Azure Storage should you use?",
    "o": [
      "Queue.",
      "Blob.",
      "File.",
      "Table."
    ],
    "a": {
      "key": "c",
      "text": "File.",
      "exp": ""
    }
  },
  {
    "id": "en-119",
    "q": "When provisioning an Azure Cosmos DB account, which feature provides redundancy within an Azure region?",
    "o": [
      "Multi-master replication.",
      "Availability Zones.",
      "Automatic failover.",
      "The strong consistency level."
    ],
    "a": {
      "key": "b",
      "text": "Availability Zones.",
      "exp": ""
    }
  },
  {
    "id": "en-120",
    "q": "Which clause should you use in a select statement to combine rows in one table with rows in another table?",
    "o": [
      "JOIN.",
      "VALUES.",
      "Set.",
      "KEY."
    ],
    "a": {
      "key": "a",
      "text": "JOIN.",
      "exp": ""
    }
  },
  {
    "id": "en-121",
    "q": "What should you use to build a Microsoft Power BI paginated report?",
    "o": [
      "Power BI report Builder.",
      "Power BI Desktop.",
      "Charticulator.",
      "The Power BI service."
    ],
    "a": {
      "key": "a",
      "text": "Power BI report Builder.",
      "exp": ""
    }
  },
  {
    "id": "en-122",
    "q": "You need to modify a view in a relational database by adding a new column. Which statement should you use?",
    "o": [
      "MERGE.",
      "ALTER.",
      "INSERT.",
      "UPDATE."
    ],
    "a": {
      "key": "b",
      "text": "ALTER.",
      "exp": ""
    }
  },
  {
    "id": "en-123",
    "q": "Transparent Data Encryption (TDE) encrypts [...].",
    "o": [
      "a column to protect data at rest and in transit.",
      "queries and their results in order to protect data in transit.",
      "the database to protect data at rest.",
      "the server to protect data at rest."
    ],
    "a": {
      "key": "c",
      "text": "the database to protect data at rest.",
      "exp": ""
    }
  },
  {
    "id": "en-124",
    "q": "Transcribing audio files is an example of [...] analytics.",
    "o": [
      "Cognitive.",
      "Descriptive.",
      "Predictive.",
      "Prescriptive."
    ],
    "a": {
      "key": "a",
      "text": "Cognitive.",
      "exp": ""
    }
  },
  {
    "id": "en-125",
    "q": "Your company is designing a database that will contain session data for a website. The data will include notifications, personalization attributes, and products that are added to a shopping cart. Which type of data store will provide the lowest latency to retrieve the data?",
    "o": [
      "key/value.",
      "graph.",
      "columnar.",
      "document."
    ],
    "a": {
      "key": "a",
      "text": "key/value.",
      "exp": ""
    }
  },
  {
    "id": "en-126",
    "q": "Which two Azure services can be used to provision Spark clusters?",
    "o": [
      "Azure Databricks.",
      "Azure Log Analytics.",
      "Azure Time Series Insights.",
      "Azure HDinsight."
    ],
    "a": {
      "key": "a",
      "text": "Azure Databricks.",
      "exp": ""
    }
  },
  {
    "id": "en-127",
    "q": "You need to recommend a non-relational data store that is optimized for storing and retrieving files, videos, audio stream, and virtual disk images. The data store must store data, some metadata, and a unique ID for each file. What should the developers use?",
    "o": [
      "Azure Data Studio.",
      "sq1cmd.",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Explorer."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Studio.",
      "exp": ""
    }
  },
  {
    "id": "en-128",
    "q": "You need to recommend a non-relational data store that is optimized for storing and retrieving files, videos, audio stream, and virtual disk images. The data store must store data, some metadata, and a unique ID for each file. Which type of data store should you recommend?",
    "o": [
      "document.",
      "key/value.",
      "object.",
      "columnar."
    ],
    "a": {
      "key": "c",
      "text": "object.",
      "exp": ""
    }
  },
  {
    "id": "en-129",
    "q": "Match the Azure Cosmos DB APIs to the appropriate data structures.",
    "o": [
      "Graph data: Cassandra API. JSON documents: Table API. Key/value data: MongoDB API.",
      "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API.",
      "Graph data: Table API. JSON documents: Gremlin API. Key/value data: Cassandra API.",
      "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API."
    ],
    "a": {
      "key": "b",
      "text": "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API.",
      "exp": ""
    }
  },
  {
    "id": "en-130",
    "q": "Your company needs to design a database that illustrates the relationships between utilization levels of individual network devices across a local area network. Which type of data store should you use?",
    "o": [
      "graph.",
      "key/value.",
      "document.",
      "columnar."
    ],
    "a": {
      "key": "b",
      "text": "key/value.",
      "exp": ""
    }
  },
  {
    "id": "en-131",
    "q": "Which type of data store should you recommend?",
    "o": [
      "Document.",
      "Key/value.",
      "Object.",
      "Columnar."
    ],
    "a": {
      "key": "c",
      "text": "Object.",
      "exp": ""
    }
  },
  {
    "id": "en-132",
    "q": "When ingesting data from Azure Data Lake Storage across Azure regions, you will incur costs for bandwidth.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-133",
    "q": "You can use blob, table, and file storage in the same Azure Storage account.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-134",
    "q": "You implement Azure Data Lake Storage by creating an Azure Storage account.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-135",
    "q": "You have an Azure SQL database that you access directly from the internet. You recently changed your external IP address. After changing the IP address, you can no longer access the database. You can connect to other resources in Azure. What is a possible cause of the issue?",
    "o": [
      "A database-level firewall.",
      "Role-based access control (RSAC).",
      "Dynamic Host Configuration Protocol (DHCP).",
      "Domain Name Service (DNS)."
    ],
    "a": {
      "key": "a",
      "text": "A database-level firewall.",
      "exp": ""
    }
  },
  {
    "id": "en-136",
    "q": "A pipeline is a representation of a data structure within Azure Data Factory.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-137",
    "q": "Azure data Factory pipelines can execute other pipelines.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-138",
    "q": "A processing step within an Azure Data Factory pipeline is an activity.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-139",
    "q": "A bar chart showing year-to date sales by regionis an example of which type of analytics?",
    "o": [
      "Descriptive.",
      "Diagnostic.",
      "Predictive.",
      "Prescriptiv."
    ],
    "a": {
      "key": "b",
      "text": "Diagnostic.",
      "exp": ""
    }
  },
  {
    "id": "en-140",
    "q": "Azure Databricks can consume data from Azure SQL Databate.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-141",
    "q": "Azure Databricks can consume data from Azure Event Hubs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-142",
    "q": "Azure Databricks can consume data from Azure Cosmos DB.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-143",
    "q": "Which Azure Data Factory component initiates the execution of a pipeline?",
    "o": [
      "A control flow.",
      "A trigger.",
      "A parameter.",
      "An activity."
    ],
    "a": {
      "key": "b",
      "text": "A trigger.",
      "exp": ""
    }
  },
  {
    "id": "en-144",
    "q": "Relational database tables contain columns and rows.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-145",
    "q": "Indexes in a relational database describe the data types in a table.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-146",
    "q": "A database view is a virtual table whose content is defined by a query.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-147",
    "q": "Which three requirements must be met to query the table from the internet?",
    "o": [
      "You must be assigned the Reader role for the resource group that contains the database.",
      "You must have SELECT access to the Products table.",
      "You must have a user in the database.",
      "You must be assigned the Contributor role for the resource group that contains the database.",
      "Your IP address must be allowed to connect to the database."
    ],
    "a": {
      "key": [
        "b",
        "c",
        "e"
      ],
      "text": [
        "You must have SELECT access to the Products table.",
        "You must have a user in the database.",
        "Your IP address must be allowed to connect to the database."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-148",
    "q": "When can you use an Azure Resource Manager template?",
    "o": [
      "To automate the creation of an interdependent group of Azure resources in a repeatable way.",
      "To automate the creation of an interdependent and develop can deploy from the Azure portal.",
      "To provision Azure subscriptions and apply policies for multi-tenant deployments.",
      "To set complex permissions automatically on existing objects in an Azure subscription."
    ],
    "a": {
      "key": "a",
      "text": "To automate the creation of an interdependent group of Azure resources in a repeatable way.",
      "exp": ""
    }
  },
  {
    "id": "en-149",
    "q": "Which three objects can be added to a Microsoft Power BI dashboard?",
    "o": [
      "A report page.",
      "A Microsoft PowerPoint slide.",
      "A visualization from a report.",
      "A dataflow.",
      "A text box."
    ],
    "a": {
      "key": [
        "a",
        "c",
        "e"
      ],
      "text": [
        "A report page.",
        "A visualization from a report.",
        "A text box."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-150",
    "q": "Which two activities can be performed entirely by using the Microsoft Power BI service?",
    "o": [
      "Report and dashboard creation.",
      "Report sharing and distribution.",
      "Data modeling.",
      "Data acquisition and preparation."
    ],
    "a": {
      "key": [
        "a",
        "d"
      ],
      "text": [
        "Report and dashboard creation.",
        "Data acquisition and preparation."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-151",
    "q": "When using the Azure Cosmos DB Gremlin API, the container resource type is projected as a [...].",
    "o": [
      "graph.",
      "table.",
      "partition key.",
      "document."
    ],
    "a": {
      "key": "a",
      "text": "graph.",
      "exp": ""
    }
  },
  {
    "id": "en-152",
    "q": "You are reviewing the data model shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. The data model is a [...].",
    "o": [
      "transactional model.",
      "star schema.",
      "snowflake schema."
    ],
    "a": {
      "key": "c",
      "text": "snowflake schema.",
      "exp": ""
    }
  },
  {
    "id": "en-153",
    "q": "You are reviewing the data model shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. Customer is a [...] table.",
    "o": [
      "fact.",
      "dimension.",
      "bridge."
    ],
    "a": {
      "key": "b",
      "text": "dimension.",
      "exp": ""
    }
  },
  {
    "id": "en-154",
    "q": "A bar chart showing year-to date sales by region is an example of which type of analytics?",
    "o": [
      "descriptive.",
      "diagnostic.",
      "predictive.",
      "prescriptive."
    ],
    "a": {
      "key": "b",
      "text": "diagnostic.",
      "exp": ""
    }
  },
  {
    "id": "en-155",
    "q": "Match the types of workloads the appropriate scenario.",
    "o": [
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Micro-batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Micro-batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Micro-batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Micro-batch. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming."
    ],
    "a": {
      "key": "a",
      "text": "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Micro-batch.",
      "exp": ""
    }
  },
  {
    "id": "en-156",
    "q": "Your company plans to load data from a customer relationship management (CRM) system to a data warehouse by using an extract load, and transform (ELT) process. Where does data processing occur for each stage of the ELT process?",
    "o": [
      "Extract: The data warehouse. Load: An in-memory data integration tool. Transform: The CRM system.",
      "Extract: The data warehouse. Load: The CRM system. Transform: An in-memory data integration tool.",
      "Extract: The CRM system. Load: The data warehouse. Transform: An in-memory data integration tool.",
      "Extract: The CRM system. Load: An in-memory data integration tool. Transform: The data warehouse."
    ],
    "a": {
      "key": "c",
      "text": "Extract: The CRM system. Load: The data warehouse. Transform: An in-memory data integration tool.",
      "exp": ""
    }
  },
  {
    "id": "en-157",
    "q": "You have a SQL query that combines customer data and order data. The query includes calculated columns. You need to persist the SQL query so that other users can use the query. What should you create?",
    "o": [
      "a table.",
      "an index.",
      "scalar function.",
      "a view."
    ],
    "a": {
      "key": "b",
      "text": "an index.",
      "exp": ""
    }
  },
  {
    "id": "en-158",
    "q": "Your company is designing a data store tor internet-connected temperature sensors. The collected data will be used to analyze temperature trends.Which type of data store should you use?",
    "o": [
      "relational.",
      "columnar.",
      "graph.",
      "time series."
    ],
    "a": {
      "key": "d",
      "text": "time series.",
      "exp": ""
    }
  },
  {
    "id": "en-159",
    "q": "In Azure Data Factory, you can use [...] to orchestrate pipeline ctivities that depend on the output of other pipeline activities.",
    "o": [
      "a control flow.",
      "a dataset.",
      "a linked service.",
      "an integration runtime."
    ],
    "a": {
      "key": "a",
      "text": "a control flow.",
      "exp": ""
    }
  },
  {
    "id": "en-160",
    "q": "Match the Azure services to the appropriate locations in the architecture.",
    "o": [
      "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Cosmos DB.",
      "Extract Transform Load (ETL): Azure Table storage. Data warehouse: Azure Cosmos DB.",
      "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Synapse Analytics.",
      "Extract Transform Load (ETL): Azure Synapse Analytics. Data warehouse: Azure Table storage."
    ],
    "a": {
      "key": "c",
      "text": "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Synapse Analytics.",
      "exp": ""
    }
  },
  {
    "id": "en-161",
    "q": "What is a benefit of the Azure Cosmos DB Table API as compared to Azure Table storage?",
    "o": [
      "Supports partitioning.",
      "Provides resiliency if art Azure region fads.",
      "Provides a higher storage capacity.",
      "Supports a multi-master model."
    ],
    "a": {
      "key": "d",
      "text": "Supports a multi-master model.",
      "exp": ""
    }
  },
  {
    "id": "en-162",
    "q": "Which statement is an example of Data Manipulation Language (DML)?",
    "o": [
      "INSERT.",
      "DISABLE.",
      "ALTER.",
      "DROP."
    ],
    "a": {
      "key": "a",
      "text": "INSERT.",
      "exp": ""
    }
  },
  {
    "id": "en-163",
    "q": "An extract, transform, and load (ETL) process requires [...].",
    "o": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "a": {
      "key": "d",
      "text": "that the data target be a relational database.",
      "exp": ""
    }
  },
  {
    "id": "en-164",
    "q": "Relational data is stored in [...].",
    "o": [
      "A file system as unstructured data.",
      "A hierarchal folder structure.",
      "A tabular form of rows and columns.",
      "Comma-separated value (CSV) files."
    ],
    "a": {
      "key": "b",
      "text": "A hierarchal folder structure.",
      "exp": ""
    }
  },
  {
    "id": "en-165",
    "q": "When you create an Azure SQL database, which account can always connect to the database?",
    "o": [
      "The Azure Active director/ (Azure AO) account that created the database.",
      "The Azure Active Directly Azure AD) administrator account.",
      "The sa account.",
      "The server admin login account of the logical server."
    ],
    "a": {
      "key": "d",
      "text": "The server admin login account of the logical server.",
      "exp": ""
    }
  },
  {
    "id": "en-166",
    "q": "Descriptive analytics tells you [...].",
    "o": [
      "What is most likely to occur in the future.",
      "What occured in the past.",
      "Which actions you can perform to affect outcomes.",
      "Why something occured in the past."
    ],
    "a": {
      "key": "b",
      "text": "What occured in the past.",
      "exp": ""
    }
  },
  {
    "id": "en-167",
    "q": "You have a transactional application that stem data in an Azure SQL managed instance. When should you implement a read-only database replica?",
    "o": [
      "You need to generate reports without affecting the transactional workload.",
      "You need to audit the transactional application.",
      "You need to implement high availability in the event of a regional outage",
      "You need to improve the recovery point objective (RPO)."
    ],
    "a": {
      "key": "a",
      "text": "You need to generate reports without affecting the transactional workload.",
      "exp": ""
    }
  },
  {
    "id": "en-168",
    "q": "Relational data uses [...] to enforce relationships between different tables.",
    "o": [
      "collections.",
      "columns.",
      "keys.",
      "partitions."
    ],
    "a": {
      "key": "c",
      "text": "keys.",
      "exp": ""
    }
  },
  {
    "id": "en-169",
    "q": "An extract,load, and transform (ELT) process requires [...]",
    "o": [
      "a data pipeline that includes a transformation engine.",
      "separate transformation engine.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store."
    ],
    "a": {
      "key": "d",
      "text": "data that is fully processed before being loaded to the target data store.",
      "exp": ""
    }
  },
  {
    "id": "en-170",
    "q": "Match the Azure services to appropriate requirements. [...] Output data to Parquet format.",
    "o": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Factory.",
      "exp": ""
    }
  },
  {
    "id": "en-171",
    "q": "Match the Azure services to appropriate requirements. [...] Store data that is in Parquet format.",
    "o": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "a": {
      "key": "c",
      "text": "Azure Data Lake Storage.",
      "exp": ""
    }
  },
  {
    "id": "en-172",
    "q": "Match the Azure services to appropriate requirements. [...] Persist a tabular representation of data that is stored in Parquet format.",
    "o": [
      "Azure Data Factory.",
      "Azure Synapse Analytics.",
      "Azure Data Lake Storage.",
      "Azure SQL Database."
    ],
    "a": {
      "key": "b",
      "text": "Azure Synapse Analytics.",
      "exp": ""
    }
  },
  {
    "id": "en-173",
    "q": "The massively parallel processing (MPP) engine of Azure Synapse Analytics [...].",
    "o": [
      "distributes processing across compute nodes.",
      "distributes processing across control nodes.",
      "redirects client connections across compute nodes.",
      "redirects client connections across control nodes."
    ],
    "a": {
      "key": "c",
      "text": "redirects client connections across compute nodes.",
      "exp": ""
    }
  },
  {
    "id": "en-174",
    "q": "Normalization involves eliminating relationships between database tables.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-175",
    "q": "Normalizing a database reduces data redundancy.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-176",
    "q": "Normalization improves data integrity.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-177",
    "q": "Which two types of replica can you us for the storage account?",
    "o": [
      "Read-access geo-redundant storage (RA_GRS).",
      "Zone-redundant storage (ZRS).",
      "Geo-redundant storage (GRS).",
      "Locally-redundant storage (LRS)."
    ],
    "a": {
      "key": [
        "a",
        "c"
      ],
      "text": [
        "Read-access geo-redundant storage (RA_GRS).",
        "Geo-redundant storage (GRS)."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-178",
    "q": "Your company has a reporting solution that has paginated reports. The reports query a dimensional model in a data warehouse. Which type of processing does the reporting solution use?",
    "o": [
      "Stream processing.",
      "Online Transaction Processing (OLTP).",
      "Batch processing.",
      "Online Analytical Processing (OLAP)."
    ],
    "a": {
      "key": "d",
      "text": "Online Analytical Processing (OLAP).",
      "exp": ""
    }
  },
  {
    "id": "en-179",
    "q": "Match the types of workloads the appropriate scenario. Updates to inventory data will be loaded to adata warehouse every 1,000 transactions.",
    "o": [
      "Batch.",
      "Streaming."
    ],
    "a": {
      "key": "a",
      "text": "Batch.",
      "exp": ""
    }
  },
  {
    "id": "en-180",
    "q": "What are two characteristics of real-time data processing?",
    "o": [
      "Data is processed as it is created.",
      "Low latency is expected.",
      "High latency acceptable.",
      "Data is processed periodically."
    ],
    "a": {
      "key": [
        "a",
        "b"
      ],
      "text": [
        "Data is processed as it is created.",
        "Low latency is expected."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-181",
    "q": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control adn update the operating system version [...].",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-182",
    "q": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-183",
    "q": "A graphical tool for managing Azure SQL databases and viewing SQL execution plans.",
    "o": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "a": {
      "key": "c",
      "text": "Microsoft SQL Server Management Studio (SSMS).",
      "exp": ""
    }
  },
  {
    "id": "en-184",
    "q": "A Microsoft SQL Server extension that supports connections to SQL Server and provides a rich editing experience for T-SQL.",
    "o": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "a": {
      "key": "d",
      "text": "Microsoft Visual Studio Code.",
      "exp": ""
    }
  },
  {
    "id": "en-185",
    "q": "A lightweight editor that can run on-demand SQL queries and view and save results as text. JSON, or Microsoft Excel files.",
    "o": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Studio.",
      "exp": ""
    }
  },
  {
    "id": "en-186",
    "q": "A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models. SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports.",
    "o": [
      "Azure Data Studio.",
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Microsoft Visual Studio Code."
    ],
    "a": {
      "key": "b",
      "text": "Microsoft SQL Server Data Tools (SSDT).",
      "exp": ""
    }
  },
  {
    "id": "en-187",
    "q": "Your company if designing an application that will write a high volume of JSON data and will have an application-defined schema. Which type of data store should you use?",
    "o": [
      "Key/value.",
      "Document.",
      "Graph.",
      "Columnar."
    ],
    "a": {
      "key": "a",
      "text": "Key/value.",
      "exp": ""
    }
  },
  {
    "id": "en-188",
    "q": "Your company plans to load data from a customer relationship management (CRM) system to a data warehouse by using an extract load, and transform (ELT) process. Where does data processing occur for each stage of the ELT process?",
    "o": [
      "Extract: The data warehouse. Load: A standalone data analysis tool. Transform: The CRM system.",
      "Extract: The data warehouse. Load: The CRM system. Transform: A standalone data analysis tool.",
      "Extract: The CRM system. Load: The data warehouse. Transform: A standalone data analysis tool.",
      "Extract: The CRM system. Load: A standalone data analysis tool. Transform: The data warehouse."
    ],
    "a": {
      "key": "c",
      "text": "Extract: The CRM system. Load: The data warehouse. Transform: A standalone data analysis tool.",
      "exp": ""
    }
  },
  {
    "id": "en-189",
    "q": "You have a table named Sales that contains the following data. You need to query the table to return the average sales amount day. The output must produce the following results. How should you complete the query?",
    "o": [
      "CREATE.",
      "GROUP BY.",
      "ORDER BY.",
      "SELECT."
    ],
    "a": {
      "key": [
        "b",
        "d"
      ],
      "text": [
        "GROUP BY.",
        "SELECT."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-190",
    "q": "What are two uses of data visualization?",
    "o": [
      "Represent trends and patterns over time.",
      "Communicate the significance of data.",
      "Implement machine learning to predict future values.",
      "Consistently implement business logic across reports."
    ],
    "a": {
      "key": [
        "a",
        "c"
      ],
      "text": [
        "Represent trends and patterns over time.",
        "Implement machine learning to predict future values."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-191",
    "q": "Which two Azure services can be used to provision Spark clusters?",
    "o": [
      "Azure Databricks.",
      "Azure Log Analytics.",
      "Azure Time Series Insights.",
      "Azure HDinsight."
    ],
    "a": {
      "key": [
        "a",
        "d"
      ],
      "text": [
        "Azure Databricks.",
        "Azure HDinsight."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-192",
    "q": "To configure an Azure Storage account to support both security at the folder level and atomic directory manipulation [...].",
    "o": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "a": {
      "key": "b",
      "text": "Set Account kind to BlobStorage.",
      "exp": ""
    }
  },
  {
    "id": "en-193",
    "q": "Match the types of data to the appropriate Azure data services. To answer, drag the appropriate data types from the column on the left to its service on the right. Each data type may be used once, more than once, or not at all. NOTE: Each correct match is worth one point.",
    "o": [
      "Box 1: Image files, Box 2: Azure Cosmos DB Gremlin API, Box 3: Key-value pairs.",
      "Box 1: Azure Cosmos DB Gremlin Box 2: Image files, Box 3: Key-value pairs.",
      "Box 1: Key-value pairs, Box 2: Image files, Box 3: Azure Cosmos DB Gremlin."
    ],
    "a": {
      "key": "a",
      "text": "Box 1: Image files, Box 2: Azure Cosmos DB Gremlin API, Box 3: Key-value pairs.",
      "exp": ""
    }
  },
  {
    "id": "en-194",
    "q": "What are two benefits of platform as a service (PaaS) relational database offerings in Azure, such as Azure SQL Database?",
    "o": [
      "Complete control over backup and restore processes.",
      "Access to the latest features.",
      "In-database machine learning services.",
      "Reduced administrative effort for managing the server infrastructure."
    ],
    "a": {
      "key": [
        "b",
        "c"
      ],
      "text": [
        "Access to the latest features.",
        "In-database machine learning services."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-195",
    "q": "Azure Synapse Analytics scales storage and compute independently.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-196",
    "q": "Azure Synapse Analytics can be paused to reduce compute costs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-197",
    "q": "An Azure Synapse Analytics data warehouse has fixed storage capacity.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-198",
    "q": "In batch processing [...].",
    "o": [
      "data is always insertes one row at a time.",
      "data is processed in real-time.",
      "latency is expected.",
      "processing car only execute serially."
    ],
    "a": {
      "key": "c",
      "text": "latency is expected.",
      "exp": ""
    }
  },
  {
    "id": "en-199",
    "q": "Your company needs to ensure that in Azure virtual machine can connect to Azure SQL databases without exposing the databases to the internet. What should you use?",
    "o": [
      "Azure DNS.",
      "Azure Application Gateway.",
      "Azure Private link.",
      "Azure Traffic Manager."
    ],
    "a": {
      "key": "c",
      "text": "Azure Private link.",
      "exp": ""
    }
  },
  {
    "id": "en-200",
    "q": "You have a SQL query that combines customer data and order data. The query includes calculated columns. You need to persist the SQL query so that other users can use the query. What should you create?",
    "o": [
      "a table.",
      "an index.",
      "scalar function.",
      "a view."
    ],
    "a": {
      "key": "d",
      "text": "a view.",
      "exp": ""
    }
  },
  {
    "id": "en-201",
    "q": "A relational database must be used when [...].",
    "o": [
      "a dynamic schema is required.",
      "data will be stored as key/value pairs.",
      "storing large images and videos.",
      "strong consistency guarantees are required."
    ],
    "a": {
      "key": "d",
      "text": "strong consistency guarantees are required.",
      "exp": ""
    }
  },
  {
    "id": "en-202",
    "q": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Customer is [...].",
    "o": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "a": {
      "key": "c",
      "text": "a root object.",
      "exp": ""
    }
  },
  {
    "id": "en-203",
    "q": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Address is [...].",
    "o": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "a": {
      "key": "b",
      "text": "a nested object.",
      "exp": ""
    }
  },
  {
    "id": "en-204",
    "q": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Social media is [...].",
    "o": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "a": {
      "key": "a",
      "text": "a nested array.",
      "exp": ""
    }
  },
  {
    "id": "en-205",
    "q": "Platform as a service (PaaS) database offerings in Azure require less seup and configuration effort than infrastructure as a service (IaaS) database offerings.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-206",
    "q": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control and update the operating system version.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-207",
    "q": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-208",
    "q": "You have an e-commerce application that reads and writes data to an Azure SQL database. Which type of processing does the application use?",
    "o": [
      "stream processing.",
      "batch processing.",
      "Online Analytical Processing (OLTP).",
      "Online Transaction Processing (OLTP)."
    ],
    "a": {
      "key": "d",
      "text": "Online Transaction Processing (OLTP).",
      "exp": ""
    }
  },
  {
    "id": "en-209",
    "q": "Which database transaction property ensures that transactional changes to a database are preserved during unexpected operating system restarts?",
    "o": [
      "consistency.",
      "durability.",
      "isolation.",
      "atomicity."
    ],
    "a": {
      "key": "b",
      "text": "durability.",
      "exp": ""
    }
  },
  {
    "id": "en-210",
    "q": "A processing step within an Azure Data Factory pipeline is an activity.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-211",
    "q": "Which statement is an example of Data Definition Language (DDL)?",
    "o": [
      "SELECT.",
      "JOIN.",
      "MERGE.",
      "CREATE."
    ],
    "a": {
      "key": "d",
      "text": "CREATE.",
      "exp": ""
    }
  },
  {
    "id": "en-212",
    "q": "Azure Databricks can consume data from Azure SQL Databate.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-213",
    "q": "Azure Databricks can consume data from Azure Event Hubs.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-214",
    "q": "A visualization that illustrates a university's current student enrollment per department is an example of [...] analytics.",
    "o": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "a": {
      "key": "b",
      "text": "descriptive.",
      "exp": ""
    }
  },
  {
    "id": "en-215",
    "q": "[...] natively support the analysis of relationship between entities.",
    "o": [
      "Column family databases.",
      "Document databases.",
      "Graph databases.",
      "Key-value stores."
    ],
    "a": {
      "key": "a",
      "text": "Column family databases.",
      "exp": ""
    }
  },
  {
    "id": "en-216",
    "q": "Azure Data Studio can be used to query an Azure SQL database from a device that runs macOS.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-217",
    "q": "You have data saved in the following format. Which format was used?",
    "o": [
      "XML.",
      "yaml.",
      "JSON.",
      "HTML."
    ],
    "a": {
      "key": "d",
      "text": "HTML.",
      "exp": ""
    }
  },
  {
    "id": "en-218",
    "q": "A bank has a system that manages financial transactions. When transferring money between accounts, the system must never retrieve a value for the source account that reflects the balance before the transfer and a value for the destination account that reflects the balance after the transfer. Of which ACID semantic is this an example?",
    "o": [
      "atomicity.",
      "isolation.",
      "durability.",
      "consistency."
    ],
    "a": {
      "key": "b",
      "text": "isolation.",
      "exp": ""
    }
  },
  {
    "id": "en-219",
    "q": "You have data saved in the following format. Which format was used?",
    "o": [
      "YAML.",
      "HTML.",
      "XML.",
      "JSON."
    ],
    "a": {
      "key": "b",
      "text": "HTML.",
      "exp": ""
    }
  },
  {
    "id": "en-220",
    "q": "Your company is designing a data store that will contain student data. The data has the following format. Which type of data store should you use?",
    "o": [
      "graph.",
      "key/value.",
      "object.",
      "columnar."
    ],
    "a": {
      "key": "d",
      "text": "columnar.",
      "exp": ""
    }
  },
  {
    "id": "en-221",
    "q": "Match the types of analytics that can be used to answer the business questions.",
    "o": [
      "Why did sales increase last month?: Cognitive. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Predictive. Detect images of the company's logo included in PDF documents: Prescriptive.",
      "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Prescriptive. Detect images of the company's logo included in PDF documents: Cognitive.",
      "Why did sales increase last month?: Cognitive. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Descriptive. Detect images of the company's logo included in PDF documents: Diagnostic.",
      "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Predictive. Detect images of the company's logo included in PDF documents: Descriptive."
    ],
    "a": {
      "key": "b",
      "text": "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Prescriptive. Detect images of the company's logo included in PDF documents: Cognitive.",
      "exp": ""
    }
  },
  {
    "id": "en-222",
    "q": "A Microsoft Power BI dashboard is associated with a single workspace.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-223",
    "q": "A data engineer is responsible for which task?",
    "o": [
      "Design and build analytical models.",
      "Design and implement data stores for analytical workloads.",
      "Explore data to identify trends.",
      "Implement policies, tools. and processes for backup and recovery plans."
    ],
    "a": {
      "key": "a",
      "text": "Design and build analytical models.",
      "exp": ""
    }
  },
  {
    "id": "en-224",
    "q": "You need to use Transact-SQL to query files in Azure Data Lake Storage from an Azure Synapse Analytics data warehouse. What should you use to query the files?",
    "o": [
      "Azure Functions.",
      "Microsoft SQL Server Integration Services (SSIS).",
      "PolyBase.",
      "Azure Data Factory."
    ],
    "a": {
      "key": "c",
      "text": "PolyBase.",
      "exp": ""
    }
  },
  {
    "id": "en-225",
    "q": "Batch processing can output data to a relational database.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-226",
    "q": "Which command-line tool can you use to query Azure SQL databases?",
    "o": [
      "sqlcmd.",
      "bcp.",
      "azdata.",
      "Azure CLI."
    ],
    "a": {
      "key": "a",
      "text": "sqlcmd.",
      "exp": ""
    }
  },
  {
    "id": "en-227",
    "q": "What is used to define a query in a stream processing jobs in Azure Stream Analytics?",
    "o": [
      "XML.",
      "KQL.",
      "YAML.",
      "SQL."
    ],
    "a": {
      "key": "d",
      "text": "SQL.",
      "exp": ""
    }
  },
  {
    "id": "en-228",
    "q": "What is a characteristic of batch processing?",
    "o": [
      "The data ingested during batch processing must be processed as soon as the data is received.",
      "Large datasets must be split into batches of less than 1 GB before the data can be processed.",
      "There is a noticeable time delay between ingesting data and obtaining the data processing results.",
      "Batch processing can only process data that is structured."
    ],
    "a": {
      "key": "d",
      "text": "Batch processing can only process data that is structured.",
      "exp": ""
    }
  },
  {
    "id": "en-229",
    "q": "To configure an Azure Storage account to support access control lists that have object-level permissions [...].",
    "o": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "a": {
      "key": "a",
      "text": "Enable the hierarchical namespace.",
      "exp": ""
    }
  },
  {
    "id": "en-230",
    "q": "Normalizing a database increases the throughput of writing transactions.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-231",
    "q": "Analytics systems are more normalized than transactional systems.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-232",
    "q": "Normalizing a database results in queries that require more joins.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-233",
    "q": "Match the types of workloads the appropriate scenario.",
    "o": [
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Streaming. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Batch. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming."
    ],
    "a": {
      "key": "a",
      "text": "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "exp": ""
    }
  },
  {
    "id": "en-234",
    "q": "When provisioning an Azure Cosmos DB [...], you need to specify which type of API you will use.",
    "o": [
      "account.",
      "container.",
      "database.",
      "item."
    ],
    "a": {
      "key": "a",
      "text": "account.",
      "exp": ""
    }
  },
  {
    "id": "en-235",
    "q": "Creating closed caption text for audio files is an example of [...] analytics.",
    "o": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "a": {
      "key": "b",
      "text": "descriptive.",
      "exp": ""
    }
  },
  {
    "id": "en-236",
    "q": "Match the datastore services to the appropriate descriptions.",
    "o": [
      "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Files.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Files. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Cosmos DB.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Blob storage. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Table storage.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Table storage."
    ],
    "a": {
      "key": "a",
      "text": "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Files.",
      "exp": ""
    }
  },
  {
    "id": "en-237",
    "q": "You need to store data by using Azure Table storage. What should you create first?",
    "o": [
      "an Azure Cosmos DB instance.",
      "a storage account.",
      "a blob container.",
      "a table."
    ],
    "a": {
      "key": "b",
      "text": "a storage account.",
      "exp": ""
    }
  },
  {
    "id": "en-238",
    "q": "You have a SQL pool in Azure Synapse Analytics that is only used actively every night for eight hours. You need to minimize the cost of the SQL pool during idle times. The solution must ensure that the data remains intact. What should you do on the SQL pool?",
    "o": [
      "Scale down the data warehouse units (DWUs).",
      "Pause the pool.",
      "Create a user-defined restore point.",
      "Delete the pool."
    ],
    "a": {
      "key": "b",
      "text": "Pause the pool.",
      "exp": ""
    }
  },
  {
    "id": "en-239",
    "q": "[...] presents content defined by a query.",
    "o": [
      "A heap.",
      "A stored procedure.",
      "A view.",
      "An index."
    ],
    "a": {
      "key": "c",
      "text": "A view.",
      "exp": ""
    }
  },
  {
    "id": "en-240",
    "q": "What can be used with native notebook support to query and visualize data by using a web-based interface?",
    "o": [
      "Azure Databricks.",
      "pgAdmin.",
      "Microsoft Power Bl."
    ],
    "a": {
      "key": "a",
      "text": "Azure Databricks.",
      "exp": ""
    }
  },
  {
    "id": "en-241",
    "q": "[...] is responsible for managing the security of the data in a database.",
    "o": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist.",
      "A database administrator."
    ],
    "a": {
      "key": "d",
      "text": "A database administrator.",
      "exp": ""
    }
  },
  {
    "id": "en-242",
    "q": "[...] provides a full range of Power BI data modeling and report editing features.",
    "o": [
      "Microsoft Power BI Desktop.",
      "The Microsoft Power BI service.",
      "The Microsoft Power BI phone app."
    ],
    "a": {
      "key": "a",
      "text": "Microsoft Power BI Desktop.",
      "exp": ""
    }
  },
  {
    "id": "en-243",
    "q": "Which Azure service provides the highest compatibility for databases migrated from Microsoft SQL Server 2019 Enterprise edition?",
    "o": [
      "an Azure SQL Database elastic pool.",
      "Azure SQL Managed Instance.",
      "Azure Database for MySQL.",
      "Azure SQL Database."
    ],
    "a": {
      "key": "b",
      "text": "Azure SQL Managed Instance.",
      "exp": ""
    }
  },
  {
    "id": "en-244",
    "q": "[...] is responsible for identifying which business rules must be applied to the data of a company.",
    "o": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist."
    ],
    "a": {
      "key": "c",
      "text": "A data scientist.",
      "exp": ""
    }
  },
  {
    "id": "en-245",
    "q": "Match the tools to the appropriate descriptions.",
    "o": [
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Azure Data Studio. A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft SQL Server Data Tools (SSMS). A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Microsoft SQL Server Data Tools (SSDT). A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Azure Data Studio.",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft Visual Studio Code. A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: MMicrosoft SQL Server Data Tools (SSMS). A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Microsoft SQL Server Data Tools (SSDT). A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Azure Data Studio."
    ],
    "a": {
      "key": "a",
      "text": "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
      "exp": ""
    }
  },
  {
    "id": "en-246",
    "q": "An extract, transform, and load (ETL) process requires [...].",
    "o": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "a": {
      "key": "c",
      "text": "data that is fully processed before being loaded to the target data store.",
      "exp": ""
    }
  },
  {
    "id": "en-247",
    "q": "By default, each Azure SQL database is protected by [...].",
    "o": [
      "a network security group (NSG).",
      "a server-level firewall.",
      "Azure Firewall.",
      "Azure Front Door."
    ],
    "a": {
      "key": "c",
      "text": "Azure Firewall.",
      "exp": ""
    }
  },
  {
    "id": "en-248",
    "q": "Your company is designing a database that will contain session data for a website. The data will include notifications, personalization attributes, and products that are added to a shopping cart. Which type of data store will provide the lowest latency to retrieve the data?",
    "o": [
      "key/value.",
      "graph.",
      "columnar.",
      "document."
    ],
    "a": {
      "key": "c",
      "text": "columnar.",
      "exp": ""
    }
  },
  {
    "id": "en-249",
    "q": "Which two settings can you configure at the container level? Each correct answer presents a complete solution.",
    "o": [
      "the throughput.",
      "the read region.",
      "the partition key.",
      "the API."
    ],
    "a": {
      "key": [
        "a",
        "c"
      ],
      "text": [
        "the throughput.",
        "the partition key."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-250",
    "q": "[...] is responsible for creating visuals and charts that help a company make informed decisions.",
    "o": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist.",
      "A database administrator"
    ],
    "a": {
      "key": "b",
      "text": "A data engineer.",
      "exp": ""
    }
  },
  {
    "id": "en-251",
    "q": "A [...] is a chart of colored rectangles. The size of the rectangles represent the relative value of each item. The chart can be hierarchical,displaying data as a set of rectangles nested within the main rectangle.",
    "o": [
      "line chart.",
      "matrix.",
      "scatter.",
      "treemap."
    ],
    "a": {
      "key": "d",
      "text": "treemap.",
      "exp": ""
    }
  },
  {
    "id": "en-252",
    "q": "A database object that holds data.",
    "o": [
      "Index.",
      "View.",
      "Table."
    ],
    "a": {
      "key": "c",
      "text": "Table.",
      "exp": ""
    }
  },
  {
    "id": "en-253",
    "q": "A database object whose content is defined by a query.",
    "o": [
      "Index.",
      "View.",
      "Table."
    ],
    "a": {
      "key": "b",
      "text": "View.",
      "exp": ""
    }
  },
  {
    "id": "en-254",
    "q": "A database object that helps improve the speed of data retrieval.",
    "o": [
      "Index.",
      "View.",
      "Table."
    ],
    "a": {
      "key": "a",
      "text": "Index.",
      "exp": ""
    }
  },
  {
    "id": "en-255",
    "q": "What are two characteristics of real-time data processing? Each correct answer present a complete solution.",
    "o": [
      "Data is processed as it is created.",
      "Low latency is expected.",
      "High latency acceptable.",
      "Data is processed periodically."
    ],
    "a": {
      "key": [
        "a",
        "b"
      ],
      "text": [
        "Data is processed as it is created.",
        "Low latency is expected."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-256",
    "q": "In Azure Table storage, each row in a table must be uniquely identified by which two components?",
    "o": [
      "a timestamp.",
      "a range.",
      "a row key.",
      "a partition key."
    ],
    "a": {
      "key": [
        "c",
        "d"
      ],
      "text": [
        "a row key.",
        "a partition key."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-257",
    "q": "Match the terms to the appropriate descriptions.",
    "o": [
      "Azure Data Explorer: KQL. Azure Stream Analytics: SQL. Azure Synapse Analytics: Python.",
      "Azure Data Explorer: SQL. Azure Stream Analytics: KQL. Azure Synapse Analytics: Python.",
      "Azure Data Explorer: Python. Azure Stream Analytics: SQL. Azure Synapse Analytics: KQL."
    ],
    "a": {
      "key": "a",
      "text": "Azure Data Explorer: KQL. Azure Stream Analytics: SQL. Azure Synapse Analytics: Python.",
      "exp": ""
    }
  },
  {
    "id": "en-258",
    "q": "An Azure Storage account must have [...] enabled to support Azure Data Lake Storage.",
    "o": [
      "Blob soft delete.",
      "Hierarchical namespace.",
      "Large file shares.",
      "Versioning."
    ],
    "a": {
      "key": "b",
      "text": "Hierarchical namespace.",
      "exp": ""
    }
  },
  {
    "id": "en-259",
    "q": "You need to store event log data that is semi-structured and received as the logs occur. What should you use?",
    "o": [
      "Azure Table storage.",
      "Azure Queue storage.",
      "Azure Files."
    ],
    "a": {
      "key": "b",
      "text": "Azure Queue storage.",
      "exp": ""
    }
  },
  {
    "id": "en-260",
    "q": "Which three objects can be added to a Microsoft Power BI dashboard? Each correct answer presents a complete solution.",
    "o": [
      "a report page.",
      "a Microsoft PowerPoint slide.",
      "a visualization from a report.",
      "a dataflow.",
      "a text box."
    ],
    "a": {
      "key": [
        "a",
        "c",
        "e"
      ],
      "text": [
        "a report page.",
        "a visualization from a report.",
        "a text box."
      ],
      "exp": ""
    }
  },
  {
    "id": "en-261",
    "q": "[...] is a platform as a service (PaaS) relational data service that uses massively parallel processing (MPP).",
    "o": [
      "Azure SQL Database.",
      "Azure Synapse Analytics.",
      "Azure Database for MariaDB.",
      "SQL Server on Azure on Azure virtual machines."
    ],
    "a": {
      "key": "b",
      "text": "Azure Synapse Analytics.",
      "exp": ""
    }
  },
  {
    "id": "en-262",
    "q": "You need to ensure that users use multi-factor authentication (MFA) when connecting to an Azure SQL database. Which type of authentication should you use?",
    "o": [
      "service principal authentication.",
      "Azure Active Directory (Azure AD) authentication.",
      "SQL authentication.",
      "certificate authentication."
    ],
    "a": {
      "key": "b",
      "text": "Azure Active Directory (Azure AD) authentication.",
      "exp": ""
    }
  },
  {
    "id": "en-263",
    "q": "You need to store event log data that is semi-structured and received as the logs occur. What should you use?",
    "o": [
      "Azure Table storage.",
      "Azure Queue storage.",
      "Azure Files."
    ],
    "a": {
      "key": "a",
      "text": "Azure Table storage.",
      "exp": ""
    }
  },
  {
    "id": "en-264",
    "q": "In a SQL statement, [...] are examples of aggregate functions.",
    "o": [
      "FROM and WHERE.",
      "GROUP BY and ORDER BY.",
      "JOIN and MERGE.",
      "MAX and MIN."
    ],
    "a": {
      "key": "d",
      "text": "MAX and MIN.",
      "exp": ""
    }
  },
  {
    "id": "en-265",
    "q": "You have data saved in the following format. Which format was used?",
    "o": [
      "YAML.",
      "HTML.",
      "XML.",
      "JSON."
    ],
    "a": {
      "key": "c",
      "text": "XML.",
      "exp": ""
    }
  },
  {
    "id": "en-266",
    "q": "Online analytical processing (OLAP) systems are particurarly suitable for analytical workloads because data is [...].",
    "o": [
      "limited in size.",
      "optimized for transactions.",
      "pre-aggregated.",
      "read-only."
    ],
    "a": {
      "key": "b",
      "text": "optimized for transactions.",
      "exp": ""
    }
  },
  {
    "id": "en-267",
    "q": "You need to create an Azure resource to store data in Azure Table storage. Which command should you run?",
    "o": [
      "az scorage share create.",
      "az scorage account creace.",
      "az cosmosdb creace.",
      "az scorage concainer creace."
    ],
    "a": {
      "key": "b",
      "text": "az scorage account creace.",
      "exp": ""
    }
  },
  {
    "id": "en-268",
    "q": "What is the primary purpose of a data warehouse?",
    "o": [
      "To provide answers to complex queries that rely on data from multiple sources.",
      "To provide transformation services between source and target data stores.",
      "To provide read-only storage of relational and non-relational historical data.",
      "To provide storage for transactional line-of-business (LOB) applications."
    ],
    "a": {
      "key": "a",
      "text": "To provide answers to complex queries that rely on data from multiple sources.",
      "exp": ""
    }
  },
  {
    "id": "en-269",
    "q": "Which T-SQL statement should be used to instruct a database management system to use an index instead of performing a full table scan?",
    "o": [
      "WHERE.",
      "SELECT.",
      "JOIN."
    ],
    "a": {
      "key": "b",
      "text": "SELECT.",
      "exp": ""
    }
  },
  {
    "id": "en-270",
    "q": "Which component of Azure Data Factory enables you to define a sequence of activities including for each iterators?",
    "o": [
      "Control flow.",
      "Linked services.",
      "Datasets.",
      "The integration runtime."
    ],
    "a": {
      "key": "b",
      "text": "Linked services.",
      "exp": ""
    }
  },
  {
    "id": "en-271",
    "q": "Azure SQL Database includes a fully managed backup service.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-272",
    "q": "Azure SQL Database has built-in high availability.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-273",
    "q": "Azure SQL Database can use Azure Advanced Threat Protection (ATP).",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  },
  {
    "id": "en-274",
    "q": "Database administrators apply data cleansing routines and turn data into useful information.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-275",
    "q": "Data engineers manage databases, store backup copies of data, and restore data in the event of failure.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "b",
      "text": "No.",
      "exp": ""
    }
  },
  {
    "id": "en-276",
    "q": "Data analyst create data visuals and enable companies to make data-driven decisions.",
    "o": [
      "Yes.",
      "No."
    ],
    "a": {
      "key": "a",
      "text": "Yes.",
      "exp": ""
    }
  }

]


            
        }
    };

    // ==================================================================================
    // ESTADO Y LÓGICA DEL EXAMEN
    // ==================================================================================

    let examConfig = {
        duration: 276 * 60,
        totalQuestions: 276
    };

    const CONSTANTS = {
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
            inReviewMode: false,
            categoryStats: {} // Add this line
        };
    }

    // --- Lógica Principal ---

    function getDOMElements() {
        return {
            langSelectionView: document.getElementById('language-selection-view'),
            examConfigView: document.getElementById('exam-config-view'),
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
            themeToggleBtnReview: document.getElementById('theme-toggle-btn-review'),
            numQuestionsInput: document.getElementById('num-questions'),
            examTimeInput: document.getElementById('exam-time'),
            startExamBtn: document.getElementById('start-exam-btn'),
            maxQuestionsBtn: document.getElementById('max-questions-btn'),
            maxTimeBtn: document.getElementById('max-time-btn')
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
        dom.examConfigView.style.display = 'block';
    }

    function startExamWithConfig(dom) {
        const numQuestions = parseInt(dom.numQuestionsInput.value, 10);
        const examTime = parseInt(dom.examTimeInput.value, 10);

        if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > 276) {
            alert('Por favor, introduce un número de preguntas válido (1-276).');
            return;
        }
        if (isNaN(examTime) || examTime < 1) {
            alert('Por favor, introduce un tiempo de examen válido (mínimo 1 minuto).');
            return;
        }

        examConfig.totalQuestions = numQuestions;
        examConfig.duration = examTime * 60;

        dom.examConfigView.style.display = 'none';
        dom.mainApp.style.display = 'block';
        startExam(dom);
    }

    function shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } }

    function startExam(dom) {
        const lang = state.currentLanguage;
        initUI(lang, dom);

        let sourceQuestions;
        if (lang === 'es') {
            sourceQuestions = preguntasRespuestas_es.map((pregunta) => {
                const optionKeys = ['a', 'b', 'c', 'd', 'e', 'f'];
                let respuestaKey;
                if (Array.isArray(pregunta.Respuesta)) {
                    respuestaKey = pregunta.Respuesta.map(respuesta => optionKeys[pregunta.Opciones.indexOf(respuesta)]);
                } else {
                    respuestaKey = optionKeys[pregunta.Opciones.indexOf(pregunta.Respuesta)];
                }

                return {
                    id: `es-${pregunta.Numero}`,
                    q: pregunta.Pregunta,
                    o: pregunta.Opciones,
                    a: {
                        key: respuestaKey,
                        text: pregunta.Respuesta,
                        exp: ""
                    },
                    category: pregunta.Categoria // Add this line
                };
            });
        } else {
            sourceQuestions = translations[lang].questions;
        }

        shuffleArray(sourceQuestions);
        state.currentQuestions = sourceQuestions.slice(0, examConfig.totalQuestions);
        
        showQuestion(state.currentQuestionIndex, dom);
        startTimer(dom);
        
        dom.examView.style.display = 'block';
        dom.reviewView.style.display = 'none';
        dom.resultsView.style.display = 'none';
    }

    function showQuestion(index, dom) {
        const q = state.currentQuestions[index];
        dom.questionTitleEl.textContent = translations[state.currentLanguage].ui.questionOf(index + 1, state.currentQuestions.length);
        const isMultipleChoice = Array.isArray(q.a.key);
        const inputType = isMultipleChoice ? 'checkbox' : 'radio';
        const optionsHTML = q.o.map((option, i) => {
            const optionKey = String.fromCharCode(97 + i);
            let isChecked = false;
            if (isMultipleChoice) {
                isChecked = state.userAnswers[q.id] && state.userAnswers[q.id].includes(optionKey);
            } else {
                isChecked = state.userAnswers[q.id] === optionKey;
            }
            return `<input type="${inputType}" id="option-${optionKey}" name="${q.id}" value="${optionKey}" ${isChecked ? 'checked' : ''}><label for="option-${optionKey}">${option}</label>`;
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
            const isMultipleChoice = Array.isArray(currentQuestion.a.key);
            if (isMultipleChoice) {
                const answers = formData.getAll(currentQuestion.id);
                if (answers.length > 0) {
                    state.userAnswers[currentQuestion.id] = answers;
                } else {
                    delete state.userAnswers[currentQuestion.id];
                }
            } else {
                const answer = formData.get(currentQuestion.id);
                if (answer) {
                    state.userAnswers[currentQuestion.id] = answer;
                } else {
                    delete state.userAnswers[currentQuestion.id];
                }
            }
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
        let timeLeft = examConfig.duration;
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

        // Initialize category stats
        state.categoryStats = {};
        const allCategories = new Set();
        state.currentQuestions.forEach(q => {
            if (q.category) { // Ensure question has a category
                allCategories.add(q.category);
                if (!state.categoryStats[q.category]) {
                    state.categoryStats[q.category] = { correct: 0, total: 0 };
                }
                state.categoryStats[q.category].total++;
            }
        });

        state.currentQuestions.forEach(q => {
            const userAnswer = state.userAnswers[q.id];
            const isCorrect = Array.isArray(q.a.key)
                ? (Array.isArray(userAnswer) && q.a.key.every(val => userAnswer.includes(val)) && userAnswer.every(val => q.a.key.includes(val)))
                : (userAnswer === q.a.key);

            if (isCorrect) {
                correctCount++;
                if (q.category && state.categoryStats[q.category]) {
                    state.categoryStats[q.category].correct++;
                }
            }
        });

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

        // Category Breakdown Display
        const categoryListEl = document.getElementById('category-list');
        if (categoryListEl) {
            categoryListEl.innerHTML = ''; // Clear previous results
            for (const categoryName in state.categoryStats) {
                const stats = state.categoryStats[categoryName];
                const percentage = stats.total > 0 ? ((stats.correct / stats.total) * 100).toFixed(0) : 0;
                const listItem = document.createElement('li');
                listItem.style.marginBottom = '10px';
                listItem.style.padding = '10px';
                listItem.style.backgroundColor = 'var(--background-color)';
                listItem.style.borderRadius = 'var(--border-radius)';
                listItem.style.borderLeft = `5px solid ${percentage >= 70 ? 'var(--correct-color)' : 'var(--incorrect-color)'}`;
                listItem.innerHTML = `<strong>${categoryName}:</strong> ${stats.correct} / ${stats.total} (${percentage}%)`;
                categoryListEl.appendChild(listItem);
            }
        }

        let reviewHTML = '<ul>';
        state.currentQuestions.forEach((q, index) => {
            const userAnswerKey = state.userAnswers[q.id];
            const isCorrect = Array.isArray(q.a.key)
                ? (Array.isArray(userAnswerKey) && q.a.key.every(val => userAnswerKey.includes(val)) && userAnswerKey.every(val => q.a.key.includes(val)))
                : (userAnswerKey === q.a.key);
            const userAnswerText = userAnswerKey ? (Array.isArray(userAnswerKey) ? userAnswerKey.map(key => q.o[key.charCodeAt(0) - 97]).join(', ') : q.o[userAnswerKey.charCodeAt(0) - 97]) : ui.notAnswered;
            reviewHTML += `
                <li class="${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
                    <p class="question-title">${index + 1}. ${q.q} ${state.flaggedQuestions.has(q.id) ? ui.flaggedMarker : ''}</p>
                    <p class="user-answer ${isCorrect ? '' : 'incorrect'}">${ui.yourAnswer} ${userAnswerText}</p>
                    ${!isCorrect ? `<p class="correct-answer-text">${ui.correctAnswer} ${Array.isArray(q.a.text) ? q.a.text.join(', ') : q.a.text}</p>` : ''}
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

        dom.startExamBtn.addEventListener('click', () => startExamWithConfig(dom));
        dom.maxQuestionsBtn.addEventListener('click', () => {
            dom.numQuestionsInput.value = 276;
        });
        dom.maxTimeBtn.addEventListener('click', () => {
            dom.examTimeInput.value = 180;
        });
        dom.flagBtn.addEventListener('click', () => toggleFlag(dom));
        dom.nextBtn.addEventListener('click', () => { saveAnswer(); if (state.currentQuestionIndex < state.currentQuestions.length - 1) { state.currentQuestionIndex++; showQuestion(state.currentQuestionIndex, dom); } });
        dom.prevBtn.addEventListener('click', () => { saveAnswer(); if (state.currentQuestionIndex > 0) { state.currentQuestionIndex--; showQuestion(state.currentQuestionIndex, dom); } });
        dom.reviewBtn.addEventListener('click', () => showReviewScreen(dom));
        dom.backToReviewBtn.addEventListener('click', () => showReviewScreen(dom));
        dom.finalizeBtn.addEventListener('click', () => finishExam(dom));
        dom.restartBtn.addEventListener('click', () => {
            dom.resultsView.style.display = 'none';
            dom.langSelectionView.style.display = 'flex';
        });
        dom.themeToggleBtn.addEventListener('click', () => toggleTheme(dom));
        dom.themeToggleBtnReview.addEventListener('click', () => toggleTheme(dom));
    }

    main();
});
