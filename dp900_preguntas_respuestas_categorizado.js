const preguntasRespuestas = [
  {
    "Numero": 1,
    "Pregunta": "A Microsoft Power BI [...] enables users to create highly formatted, fixed-layout documents archiving.",
    "Opciones": [
      "dashboard.",
      "interactive report.",
      "paginated report.",
      "subscription."
    ],
    "Respuesta": "paginated report.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 2,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure provide built-in high availability.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 3,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure provite configuration scaling options.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 4,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure reduce the administrative overhead for managing hardware.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 5,
    "Pregunta": "Which scenario is an example of a streaming workload?",
    "Opciones": [
      "Sending transactions that are older than a month to an archive.",
      "Sending transactions daily from point of sale (POS) devices.",
      "Sending telemetry data from edge devices.",
      "Sending cloud infrastructure metadata every 30 minutes."
    ],
    "Respuesta": "Sending telemetry data from edge devices.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 6,
    "Pregunta": "Stream processing has access to the most recent data received or data within a rolling time window.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 7,
    "Pregunta": "Batch processing must occur immediately and have latency in the order of second or milliseconds.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 8,
    "Pregunta": "Stream processing in used for simple response functions, aggregates, or calculations such as rolling averages.",
    "Opciones": [
      "Yes.",
      "no."
    ],
    "Respuesta": "no.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 9,
    "Pregunta": "You are deploying a software as a service (SaaS) application that requires a relational database for Online Transaction Processing (OLTP). Which Azure service should you use to support the application?",
    "Opciones": [
      "Azure Cosmos D3.",
      "Azure Synapse Analytics.",
      "Azure HCMmtghi.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure SQL Database.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 10,
    "Pregunta": "Extract, transform, and load (ETL) can reduce the transfer of sensitive data to destination systems.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 11,
    "Pregunta": "Extract, load, and transform (ELT) transforms data by using a compute resource independent of the source system and destination system.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 12,
    "Pregunta": "Extract, load, and transform (ELT) minimizes the time it takes to copy large volumes of data to destination systems.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 13,
    "Pregunta": "You need to recommend a data store service that meets the following requirements: Native SQL API access. Configurable indexes. What should you recommend?",
    "Opciones": [
      "Azure FilesB.",
      "Azure Blob storageC.",
      "Azure Table storageD.",
      "Azure Cosmos DB."
    ],
    "Respuesta": "Azure Cosmos DB.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 14,
    "Pregunta": "Batch processing can output data to a file store.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 15,
    "Pregunta": "Batch processing can output data to a relational database.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 16,
    "Pregunta": "Batch processing can output data to a NoSQL database.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 17,
    "Pregunta": "What is a benefit of hosting a database on Azure SQL managed instance as compared to an Azure SQL database?",
    "Opciones": [
      "Native support for cross-database queries and transactions.",
      "Built-in high availability.",
      "System-Initiated automatic backups.",
      "Support for encryption at rest."
    ],
    "Respuesta": "Native support for cross-database queries and transactions.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 18,
    "Pregunta": "A team of developers has computers Thai run Windows 10 and Ubuntu Desktop. The developers need to connect to and query an Azure SQL database from the computers. The developers require code assistance features such as intellSense. What should the developers use?",
    "Opciones": [
      "Azure Data Studio.",
      "Sq1cmdC.",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Explorer."
    ],
    "Respuesta": "Azure Data Studio.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 19,
    "Pregunta": "Batch workloads [...].",
    "Opciones": [
      "process data in memory, row-by-row.",
      "collect and process data at most once a day.",
      "process data as new data is received in near real-time.",
      "collect data and then process the data when a condition is met."
    ],
    "Respuesta": "collect data and then process the data when a condition is met.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 20,
    "Pregunta": "A block of code that runs In a database Is callea [...].",
    "Opciones": [
      "a stored procedure.",
      "a table.",
      "a view.",
      "an index."
    ],
    "Respuesta": "a stored procedure.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 21,
    "Pregunta": "Match the types of activities to the appropriate Azure Data Factory activities.",
    "Opciones": [
      "Copy: Data movement. Mapping data flow: Data transformation. Until: Control.",
      "Copy: Data transformation. Mapping data flow: Data movement. Until: Control.",
      "Copy: Data movement. Mapping data flow: Control. Until: Data transformation.",
      "Copy: Data transformation. Mapping data flow: Control. Until: Data movement."
    ],
    "Respuesta": "Copy: Data movement. Mapping data flow: Data transformation. Until: Control.",
    "Imagen": "question21.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 22,
    "Pregunta": "You have the following SQL query. INSERT INTO dbo.Products (ProductID, ProductName, Price, ProductDescription) Values (1,'Calmp',12.48,'Workbench clamp');",
    "Opciones": [
      "Dbo.Products: A table. ProductName: A column.",
      "Dbo.Products: A table. ProductName: An index.",
      "Dbo.Products: An index. ProductName: A database.",
      "Dbo.Products: A database. ProductName: A table."
    ],
    "Respuesta": "Dbo.Products: A table. ProductName: A column.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 23,
    "Pregunta": "Relational data is stored in [...].",
    "Opciones": [
      "A file system as unstructured data.",
      "A hierarchal folder structure.",
      "A tabular form of rows and columns.",
      "Comma-separated value (CSV) files."
    ],
    "Respuesta": "A tabular form of rows and columns.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 24,
    "Pregunta": "A key/value data store is optimized for [...].",
    "Opciones": [
      "Enforcing constraints.",
      "Simple lookups.",
      "Table joins.",
      "Transactions.."
    ],
    "Respuesta": "Simple lookups.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 25,
    "Pregunta": "Azure Data Studio can be used to query an Azure SQL database from a device that runs macOS.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 26,
    "Pregunta": "Microsoft SQL Server Management Studio (SSMS) enables users to create and use SQL notebooks.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 27,
    "Pregunta": "Azure Data Studio can be used to restore a database.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 28,
    "Pregunta": "Which command should you run?",
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
    "Pregunta": "Which Azure service should you use?",
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
    "Pregunta": "At which two levels can you set the throughput for an Azure Cosmos DB account?",
    "Opciones": [
      "Container.",
      "Item.",
      "Database.",
      "Partition."
    ],
    "Respuesta": [
      "Container.",
      "Database."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 31,
    "Pregunta": "You need to create a visualization of running sales totals per quarter as shown in the following exhibit. What should you create in Power BI Desktop?",
    "Opciones": [
      "A waterfall chart.",
      "A ribbon chart",
      "A bar chart.",
      "A decomposition tree."
    ],
    "Respuesta": "A waterfall chart.",
    "Imagen": "question31.jpeg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 32,
    "Pregunta": "Physically sorts the data in a table based on the values in specified column [...].",
    "Opciones": [
      "A view.",
      "A clustered index.",
      "A stored procedure.",
      "A nonclustered index."
    ],
    "Respuesta": "A clustered index.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 33,
    "Pregunta": "In an object associated with a table that sorts and stores the data rows in the table based on their ket values [...].",
    "Opciones": [
      "A clustered index.",
      "A FileTable.",
      "A foreing key.",
      "A stored procedure."
    ],
    "Respuesta": "A clustered index.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 34,
    "Pregunta": "A job that processes sales data once daily in na example of a batch workload.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 35,
    "Pregunta": "A job that calculates a rolling average temperature readling in an example of a streaming workload.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 36,
    "Pregunta": "A job that calculates average revenue per product for the last month in an example pf a streaming workload.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 37,
    "Pregunta": "You have a quality assurance application that reads data from a data warehouse. Which type of processing does the application use?",
    "Opciones": [
      "Online Transaction Processing (OLTP)",
      "Batch processing.",
      "Online Analytical Processing (OLAP).",
      "Stream processing."
    ],
    "Respuesta": "Online Transaction Processing (OLTP)",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 38,
    "Pregunta": "Your company needs to design a database that shows how changes traffic in one area of a network affect other components on the network. Which type of data store should you use?",
    "Opciones": [
      "Key/value.",
      "Graph.",
      "Documentd.",
      "Columnar."
    ],
    "Respuesta": "Graph.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 39,
    "Pregunta": "You need to store data in Azure Blob storage for seven years to meet your company’s compliance requirements. The retrieval time of the data is unimportant. The solution must minimize storage costs. Which storage tier should you use?",
    "Opciones": [
      "Archive.",
      "Hot.",
      "Cool."
    ],
    "Respuesta": "Archive.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 40,
    "Pregunta": "To configure an Azure Storage account to support both security at the folder level and atomic directory manipulation [...].",
    "Opciones": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "Respuesta": "Enable the hierarchical namespace.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 41,
    "Pregunta": "Match the security components to the appropriate scenarios.",
    "Opciones": [
      "Prevent access to an Azure SQL database from another network: Encryption. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Firewall. Ensure that sensitive data never appears as plain text in an Azure SQL database: Authentication.",
      "Prevent access to an Azure SQL database from another network: Authentication. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Firewall. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
      "Prevent access to an Azure SQL database from another network: Firewall. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Authentication. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
      "Prevent access to an Azure SQL database from another network: Authentication. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Encryption. Ensure that sensitive data never appears as plain text in an Azure SQL database: Firewall."
    ],
    "Respuesta": "Prevent access to an Azure SQL database from another network: Firewall. Support Azure Active Directory (Azure AD) sign-ins to an Azure SQL database: Authentication. Ensure that sensitive data never appears as plain text in an Azure SQL database: Encryption.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 42,
    "Pregunta": "You can use Azure Data Studio to query a Microsoft SQL Server big data cluster.",
    "Opciones": [
      "You.",
      "No."
    ],
    "Respuesta": "You.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 43,
    "Pregunta": "You can use Microsoft SQL Server Management Studio (SSMS) to query an Azure Synapse Analytics data warehouse.",
    "Opciones": [
      "Yes",
      "No."
    ],
    "Respuesta": "Yes",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 44,
    "Pregunta": "You can use MySQL Workbench to query Azure Database for MariaDB databases.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 45,
    "Pregunta": "A relational database is appropriate for scenarios that involve a high volume of [...].",
    "Opciones": [
      "changes to realtionships between entites.",
      "geographically distributed writes.",
      "transactional writes.",
      "writes that have varying data structures."
    ],
    "Respuesta": "transactional writes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 46,
    "Pregunta": "The Azure Cosmos DB API in configured separately for each database in an Azure Cosmos DB account.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 47,
    "Pregunta": "Partition keys are used in Azure Cosmos DB to opyimize queries.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 48,
    "Pregunta": "Items contained in the same Azure Cosmos DB logical partition can have different partition keys.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 49,
    "Pregunta": "You need to gather real-time telemetry data from a mobile application. Which type of workload describes this scenario?",
    "Opciones": [
      "Online Transaction Processing (OLTP).",
      "Batch.",
      "Massively parallel processing (MPP).",
      "Streaming."
    ],
    "Respuesta": "Streaming.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 50,
    "Pregunta": "Which statement should you use in a SQL query to change the inventory quantity of Product1 to 270?",
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
    "Pregunta": "Match the types of data stores to the appropriate scenarios. [...] Application users and their and default language.",
    "Opciones": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "Respuesta": "Key/value.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 52,
    "Pregunta": "Match the types of data stores to the appropriate scenarios. [...] Medical images and their associated metadata.",
    "Opciones": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "Respuesta": "Object.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 53,
    "Pregunta": "Match the types of data stores to the appropriate scenarios. [...] Employee data that shows the realtionships between employees.",
    "Opciones": [
      "Graph.",
      "Object.",
      "Key/value."
    ],
    "Respuesta": "Graph.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 54,
    "Pregunta": "Which type of non-relational data store supports a flexible schema, stores data as JSON files, and stores the all the data for an entity in the same document?",
    "Opciones": [
      "Document.",
      "Columnar.",
      "Graph.",
      "Time series."
    ],
    "Respuesta": "Document.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 55,
    "Pregunta": "Azure Table storage supports multiple read replicas.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 56,
    "Pregunta": "Azure Table storage supports multiple write regions.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 57,
    "Pregunta": "The Azure Cosmos DB Table API supports multiple read replicas.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 58,
    "Pregunta": "The Azure Cosmos DB Table API supports multiple write regions.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 59,
    "Pregunta": "Match the types of workloads the appropriate scenario. [...] Data for a product catalog vail be loaded every 12 hours to a data warehouse.",
    "Opciones": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "Respuesta": "Batch.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 60,
    "Pregunta": "Match the types of workloads the appropriate scenario. [...] Data for online purchases will be loaded to a Gata warehouse as the purchases occur.",
    "Opciones": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "Respuesta": "Streaming.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 61,
    "Pregunta": "Match the types of workloads the appropriate scenario. Updates to inventory data will be loaded to adata warehouse every 1,000 transactions.",
    "Opciones": [
      "Batch.",
      "Micro-batch",
      "Streaming."
    ],
    "Respuesta": "Micro-batch",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 62,
    "Pregunta": "Your company needs to implement a relational database in Azure. The solution must minimize ongoing maintenance. Which Azure service should you use?",
    "Opciones": [
      "Azure HDInsight.",
      "Azure SQL Database.",
      "Azure Cosmos DB.",
      "SQL Server on Azure virtual machines."
    ],
    "Respuesta": "Azure SQL Database.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 63,
    "Pregunta": "Which Azure SQL offering supports automatic database scaling and automatic pausing of the database during inactive periods?",
    "Opciones": [
      "Azure SQL Database Hyperscale.",
      "Azure SQL managed instance.",
      "Azure SQL Database serveless.",
      "Azure SQL Database elastic pod."
    ],
    "Respuesta": "Azure SQL managed instance.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 64,
    "Pregunta": "Which component of Azure Data Factory enables you to define a sequence of activities including for each iterators?",
    "Opciones": [
      "Control flow.",
      "Linked services.",
      "Datasets.",
      "The integration runtime."
    ],
    "Respuesta": "Control flow.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 65,
    "Pregunta": "You are writing a set of SQL queries that administrators will use to troubleshoot an Azure SQL database. You need to embed documents and query results into a SQL notebook. What should you use?",
    "Opciones": [
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Data Studio.",
      "Azure CLID.",
      "Azure PowerShell."
    ],
    "Respuesta": "Azure Data Studio.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 66,
    "Pregunta": "What are three characteristics of an Online Transaction Processing (OLTP) workload?",
    "Opciones": [
      "Denormalized data.",
      "Heavy writes and moderate reads.",
      "Light writes and heavy reads.",
      "Schema on write.",
      "Schema on read.",
      "Normalized data."
    ],
    "Respuesta": [
      "Heavy writes and moderate reads.",
      "Schema on write.",
      "Normalized data."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 67,
    "Pregunta": "What are two uses of data visualization?",
    "Opciones": [
      "Represent trends and patterns over time.",
      "Communicate the significance of data.",
      "Implement machine learning to predict future values.",
      "Consistently implement business logic across reports."
    ],
    "Respuesta": [
      "Represent trends and patterns over time.",
      "Communicate the significance of data."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 68,
    "Pregunta": "Your company recently reported sales from the third quarter. You have the chart shown in the following exhibit. Which type of analysis is shown for the fourth quarter?",
    "Opciones": [
      "Predictive.",
      "Prescription.",
      "Descriptive.",
      "Diagnostic"
    ],
    "Respuesta": "Predictive.",
    "Imagen": "question68.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 69,
    "Pregunta": "Which three actions are used when performing diagnostic analytics?",
    "Opciones": [
      "Identify data anomalies. Collect anomaly-related data. Discover relationships and trends that explain anomalies.",
      "Identify data anomalies. Predict when anomalies are likely to recur. Use analytical tools such as decision trees and regression.",
      "Apply serf-learning loops to draw inferences from anomalies. Predict when anomalies are likely to recur. Use analytical tools such as decision trees and regression.",
      "Identify data anomalies. Use machine learning to find patterns in large datasets. Discover relationships and trends that explain anomalies."
    ],
    "Respuesta": "Identify data anomalies. Collect anomaly-related data. Discover relationships and trends that explain anomalies.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 70,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure require less setup and configuration effort than infrastructure as a service (IaaS) database offerings.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 71,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control and update the operating system version.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 72,
    "Pregunta": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 73,
    "Pregunta": "You need to perform hybrid transactional and analytical processing (HTAP) queries against Azure Cosmos DB data sources by using Azure Synapse Analytics. What should you use?",
    "Opciones": [
      "Synapse pipelines.",
      "A Synapse SQL pool.",
      "Synapse Link.",
      "Synapse Studio."
    ],
    "Respuesta": "Synapse Link.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 74,
    "Pregunta": "A [...] in a chcat of colored rectangles. The size of the rectangles represent the relative value of each item. The chart can be hierarchical, displaying data as a set of rectangles nest within the main rectangle.",
    "Opciones": [
      "line chart.",
      "matrix.",
      "scatter.",
      "treemap."
    ],
    "Respuesta": "treemap.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 75,
    "Pregunta": "You need to design and model a database by using a graphical tool that supports project-oriented offline database development. What should you use?",
    "Opciones": [
      "Microsoft SQL Server Data Tools (SSDT).",
      "Microsoft SQL Server Management Studio (SSMS).",
      "Azure Databricks.",
      "Azure Data Studio."
    ],
    "Respuesta": "Microsoft SQL Server Data Tools (SSDT).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 76,
    "Pregunta": "What are two benefits of platform as a service (PaaS) relational database offerings in Azure, such as Azure SQL Database?",
    "Opciones": [
      "Complete control over backup and restore processes.",
      "Access to the latest features.",
      "In-database machine learning services.",
      "Reduced administrative effort for managing the server infrastructure."
    ],
    "Respuesta": [
      "Access to the latest features.",
      "Reduced administrative effort for managing the server infrastructure."
    ],
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 77,
    "Pregunta": "Which statement is an example of Data Definition Language (DDL)?",
    "Opciones": [
      "SELECT.",
      "INSERT.",
      "DELETE.",
      "DROP."
    ],
    "Respuesta": "DROP.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 78,
    "Pregunta": "Azure Databricks is an Apache Spark-based collaborative analytics platform.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 79,
    "Pregunta": "Azure Analysis Services is used for transactional workloads.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 80,
    "Pregunta": "Azure Data Factory orchestrates data integration workflows.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 81,
    "Pregunta": "Which statement is an example of Data Manipulation Language (DML)?",
    "Opciones": [
      "REVOKE.",
      "DISABLE.",
      "CREATE.",
      "UPDATE."
    ],
    "Respuesta": "UPDATE.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 82,
    "Pregunta": "Which Azure storage solution provides native support for POSIX-compliant access control lists (ACLs)?",
    "Opciones": [
      "Azure Queue storage.",
      "Azure Data Lake Storage.",
      "Azure table storage.",
      "Azure Files."
    ],
    "Respuesta": "Azure Data Lake Storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 83,
    "Pregunta": "Which setting can only be configured during the creation of an Azure Cosmos DB account?",
    "Opciones": [
      "Geo-redundancy.",
      "Multi-region writes.",
      "Production or non-reduction account type.",
      "API."
    ],
    "Respuesta": "API.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 84,
    "Pregunta": "You have an application that runs on Windows and requires across to a mapped drive. Which Azure service should you use?",
    "Opciones": [
      "Azure Files.",
      "Azure Table storage.",
      "Azure Cosmos DB.",
      "Azure Blob Storage."
    ],
    "Respuesta": "Azure Cosmos DB.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 85,
    "Pregunta": "[...] is a virtual table that contains content definey by a querty.",
    "Opciones": [
      "A heap.",
      "A stored procedure.",
      "A view.",
      "An index."
    ],
    "Respuesta": "A view.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 86,
    "Pregunta": "What is the primary purpose of a data warehouse?",
    "Opciones": [
      "To provide answers to complex queries that rely on data from multiple sources.",
      "To provide transformation services between source and target data stores.",
      "To provide read-only storage of relational and non-relational historical data.",
      "To provide storage for transactional line-of-business (LOB) applications."
    ],
    "Respuesta": "To provide read-only storage of relational and non-relational historical data.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 87,
    "Pregunta": "Which storage solution supports access control lists (ACLs) at the file and folder level?",
    "Opciones": [
      "Azure Data Lake Storage.",
      "Azure Cosmos DB.",
      "Azure Queue storage.",
      "Azure Blob storage."
    ],
    "Respuesta": "Azure Data Lake Storage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 88,
    "Pregunta": "Azure SQL managed instance supports cross-database queries.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 89,
    "Pregunta": "Azure SQL managed instance supports user-created backups.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 90,
    "Pregunta": "Azure SQL managed instance databases can be restored to SQL Server on a Azure virtual machine.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Imagen": "question91.jpg",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 91,
    "Pregunta": "A representation of data structures within data stores.",
    "Opciones": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "Respuesta": "Dataset.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 92,
    "Pregunta": "The information used to connect to external resources:",
    "Opciones": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "Respuesta": "Linked service.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 93,
    "Pregunta": "A logical grouping of activities that performs a unit of work and can be scheduled.",
    "Opciones": [
      "Pipeline.",
      "Dataset.",
      "Linked service.",
      "Mapping data flow"
    ],
    "Respuesta": "Pipeline.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 94,
    "Pregunta": "Which Azure Data Factory component provides the compute environment for activities?",
    "Opciones": [
      "A linked service.",
      "An integration runtime.",
      "A control flow.",
      "A pipeline."
    ],
    "Respuesta": "An integration runtime.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 95,
    "Pregunta": "You have an application that runs on Windows and requires access to a mapped drive. Which Azure service should you use?",
    "Opciones": [
      "Azure Files.",
      "Azure Blob storage.",
      "Azure Cosmos DB.",
      "Azure Table storage."
    ],
    "Respuesta": "Azure Files.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 96,
    "Pregunta": "Match the types of analytics that can be used to answer the business questions.",
    "Opciones": [
      "Why did sales increase last month?: Cognitive. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Prescriptive.",
      "Why did sales increase last month?: Diagnostic. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Cognitive.",
      "Why did sales increase last month?: Descriptive. How do I allocate my budget to buy different inventory items?: Prescriptive. Which people are mentioned in a company's business documents?: Predictive.",
      "Why did sales increase last month?: Predictive. How do I allocate my budget to buy different inventory items?: Prescriptive. Which people are mentioned in a company's business documents?: Diagnostic."
    ],
    "Respuesta": "Why did sales increase last month?: Diagnostic. How do I allocate my budget to buy different inventory items?: Predictive. Which people are mentioned in a company's business documents?: Cognitive.",
    "Imagen": "question94.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 97,
    "Pregunta": "Match the Azure services to the appropriate locations in the architecture.",
    "Opciones": [
      "Ingest: Azure Data Factory. Preprocess & model: Azure Synapse Analytics.",
      "Ingest: Azure Data Factory. Preprocess & model: Azure Cognitive Search.",
      "Ingest: Azure Synapse Analytics. Preprocess & model: Azure Cognitive Search.",
      "Ingest: Azure Cognitive Search. Preprocess & model: Azure Synapse Analytics."
    ],
    "Respuesta": "Ingest: Azure Data Factory. Preprocess & model: Azure Synapse Analytics.",
    "Imagen": "question95.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 98,
    "Pregunta": "You must apply patches to Azure SQL databases regularly,",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 99,
    "Pregunta": "You need a Microsoft 365 subscription to create an Azure SQL database.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 100,
    "Pregunta": "You can use existing Microsoft SQL Server licenses to reduce the cost of Azure SQL databases.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 101,
    "Pregunta": "If you have a platform as a service (PaaS) database in Azure, you are responsible for applying operating system updates.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 102,
    "Pregunta": "If you have a platform as a service (PaaS) database in Azure, backups are performed automatically.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 103,
    "Pregunta": "If you have a platform as a service (PaaS) database in Azure, you are responsible for upgrading the database engine.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 104,
    "Pregunta": "A visualization that shows a university's current student enrollment versus the maximum capacity is an example of [...] analytics.",
    "Opciones": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "Respuesta": "descriptive.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 105,
    "Pregunta": "Match the Azure Data Lake Storage terms to the appropriate levels in the hierarchy.",
    "Opciones": [
      "Box 1: File system. Box 2: File share.",
      "Box 1: Azure Storage account. Box 2: File system.",
      "Box 1: File share. Box 2: File system.",
      "Box 1: Azure Storage account. Box 2: File share."
    ],
    "Respuesta": "Box 1: Azure Storage account. Box 2: File share.",
    "Imagen": "question103.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 106,
    "Pregunta": "You can copy a dashboard between Microsoft Power BI workspaces.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 107,
    "Pregunta": "A Microsoft Power BI dashboard can only display visualizations from a single dataset.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 108,
    "Pregunta": "A Microsoft Power BY dashboard can display visualizations from a Microsoft Excel workbook.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 109,
    "Pregunta": "You can query a graph database in Azure Cosmos DB [...].",
    "Opciones": [
      "as a JSON document by using a SQL-like language.",
      "as a partitioned row store by using Cassandra Query Language (CQL).",
      "as a partitioned row store by using Language-Integrated Query (LINQ).",
      "as nodes and edges by using the Gremlin language."
    ],
    "Respuesta": "as a JSON document by using a SQL-like language.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 110,
    "Pregunta": "At which level in Azure Cosmos DB can you configure multiple write regions and read regions?",
    "Opciones": [
      "database.",
      "partition.",
      "collection.",
      "account."
    ],
    "Respuesta": "collection.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 111,
    "Pregunta": "Extract Trandform Load (ETL).",
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
    "Pregunta": "Data warehouse.",
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
    "Pregunta": "Which storage solution supports role-based access control (RBAC) at the file and folder level?",
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
    "Pregunta": "What should you use in Microsoft Power BI?",
    "Opciones": [
      "A dashboard.",
      "Microsoft Power Apps.",
      "A dataflow.",
      "A report."
    ],
    "Respuesta": "A report.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 115,
    "Pregunta": "The massively parallel processing (MPP) engine of Azure Synapse Analytics [...].",
    "Opciones": [
      "distributes processing across compute nodes.",
      "distributes processing across control nodes.",
      "redirects client connections across compute nodes.",
      "redirects client connections across control nodes."
    ],
    "Respuesta": "distributes processing across compute nodes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 116,
    "Pregunta": "An extract, transform, and load (ETL) process requires [...].",
    "Opciones": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "Respuesta": "a target data store powerful enough to transform data.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 117,
    "Pregunta": "Which two Azure services can be used to provision Apache Spark clusters?",
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
    "Pregunta": "You manage an application that stores data in a shared folder on a Windows server. You need to move the shared folder to Azure Storage. Which type of Azure Storage should you use?",
    "Opciones": [
      "Queue.",
      "Blob.",
      "File.",
      "Table."
    ],
    "Respuesta": "File.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 119,
    "Pregunta": "When provisioning an Azure Cosmos DB account, which feature provides redundancy within an Azure region?",
    "Opciones": [
      "Multi-master replication.",
      "Availability Zones.",
      "Automatic failover.",
      "The strong consistency level."
    ],
    "Respuesta": "Availability Zones.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 120,
    "Pregunta": "Which clause should you use in a select statement to combine rows in one table with rows in another table?",
    "Opciones": [
      "JOIN.",
      "VALUES.",
      "Set.",
      "KEY."
    ],
    "Respuesta": "JOIN.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 121,
    "Pregunta": "What should you use to build a Microsoft Power BI paginated report?",
    "Opciones": [
      "Power BI report Builder.",
      "Power BI Desktop.",
      "Charticulator.",
      "The Power BI service."
    ],
    "Respuesta": "Power BI report Builder.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 122,
    "Pregunta": "You need to modify a view in a relational database by adding a new column. Which statement should you use?",
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
    "Pregunta": "Transparent Data Encryption (TDE) encrypts [...].",
    "Opciones": [
      "a column to protect data at rest and in transit.",
      "queries and their results in order to protect data in transit.",
      "the database to protect data at rest.",
      "the server to protect data at rest."
    ],
    "Respuesta": "the database to protect data at rest.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 124,
    "Pregunta": "Transcribing audio files is an example of [...] analytics.",
    "Opciones": [
      "Cognitive.",
      "Descriptive.",
      "Predictive.",
      "Prescriptive."
    ],
    "Respuesta": "Cognitive.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 125,
    "Pregunta": "Your company is designing a database that will contain session data for a website. The data will include notifications, personalization attributes, and products that are added to a shopping cart. Which type of data store will provide the lowest latency to retrieve the data?",
    "Opciones": [
      "key/value.",
      "graph.",
      "columnar.",
      "document."
    ],
    "Respuesta": "key/value.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 126,
    "Pregunta": "Which two Azure services can be used to provision Spark clusters?",
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
    "Pregunta": "You need to recommend a non-relational data store that is optimized for storing and retrieving files, videos, audio stream, and virtual disk images. The data store must store data, some metadata, and a unique ID for each file. What should the developers use?",
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
    "Pregunta": "You need to recommend a non-relational data store that is optimized for storing and retrieving files, videos, audio stream, and virtual disk images. The data store must store data, some metadata, and a unique ID for each file. Which type of data store should you recommend?",
    "Opciones": [
      "document.",
      "key/value.",
      "object.",
      "columnar."
    ],
    "Respuesta": "object.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 129,
    "Pregunta": "Match the Azure Cosmos DB APIs to the appropriate data structures.",
    "Opciones": [
      "Graph data: Cassandra API. JSON documents: Table API. Key/value data: MongoDB API.",
      "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API.",
      "Graph data: Table API. JSON documents: Gremlin API. Key/value data: Cassandra API.",
      "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API."
    ],
    "Respuesta": "Graph data: Gremlin API. JSON documents: MongoDB API. Key/value data: Table API.",
    "Imagen": "question127.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 130,
    "Pregunta": "Your company needs to design a database that illustrates the relationships between utilization levels of individual network devices across a local area network. Which type of data store should you use?",
    "Opciones": [
      "graph.",
      "key/value.",
      "document.",
      "columnar."
    ],
    "Respuesta": "key/value.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 131,
    "Pregunta": "Which type of data store should you recommend?",
    "Opciones": [
      "Document.",
      "Key/value.",
      "Object.",
      "Columnar."
    ],
    "Respuesta": "Object.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 132,
    "Pregunta": "When ingesting data from Azure Data Lake Storage across Azure regions, you will incur costs for bandwidth.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 133,
    "Pregunta": "You can use blob, table, and file storage in the same Azure Storage account.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 134,
    "Pregunta": "You implement Azure Data Lake Storage by creating an Azure Storage account.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 135,
    "Pregunta": "You have an Azure SQL database that you access directly from the internet. You recently changed your external IP address. After changing the IP address, you can no longer access the database. You can connect to other resources in Azure. What is a possible cause of the issue?",
    "Opciones": [
      "A database-level firewall.",
      "Role-based access control (RSAC).",
      "Dynamic Host Configuration Protocol (DHCP).",
      "Domain Name Service (DNS)."
    ],
    "Respuesta": "A database-level firewall.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 136,
    "Pregunta": "A pipeline is a representation of a data structure within Azure Data Factory.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 137,
    "Pregunta": "Azure data Factory pipelines can execute other pipelines.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 138,
    "Pregunta": "A processing step within an Azure Data Factory pipeline is an activity.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 139,
    "Pregunta": "A bar chart showing year-to date sales by regionis an example of which type of analytics?",
    "Opciones": [
      "Descriptive.",
      "Diagnostic.",
      "Predictive.",
      "Prescriptiv."
    ],
    "Respuesta": "Diagnostic.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 140,
    "Pregunta": "Azure Databricks can consume data from Azure SQL Databate.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 141,
    "Pregunta": "Azure Databricks can consume data from Azure Event Hubs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 142,
    "Pregunta": "Azure Databricks can consume data from Azure Cosmos DB.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 143,
    "Pregunta": "Which Azure Data Factory component initiates the execution of a pipeline?",
    "Opciones": [
      "A control flow.",
      "A trigger.",
      "A parameter.",
      "An activity."
    ],
    "Respuesta": "A trigger.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 144,
    "Pregunta": "Relational database tables contain columns and rows.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 145,
    "Pregunta": "Indexes in a relational database describe the data types in a table.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 146,
    "Pregunta": "A database view is a virtual table whose content is defined by a query.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 147,
    "Pregunta": "Which three requirements must be met to query the table from the internet?",
    "Opciones": [
      "You must be assigned the Reader role for the resource group that contains the database.",
      "You must have SELECT access to the Products table.",
      "You must have a user in the database.",
      "You must be assigned the Contributor role for the resource group that contains the database.",
      "Your IP address must be allowed to connect to the database."
    ],
    "Respuesta": [
      "You must have SELECT access to the Products table.",
      "You must have a user in the database.",
      "Your IP address must be allowed to connect to the database."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 148,
    "Pregunta": "When can you use an Azure Resource Manager template?",
    "Opciones": [
      "To automate the creation of an interdependent group of Azure resources in a repeatable way.",
      "To automate the creation of an interdependent and develop can deploy from the Azure portal.",
      "To provision Azure subscriptions and apply policies for multi-tenant deployments.",
      "To set complex permissions automatically on existing objects in an Azure subscription."
    ],
    "Respuesta": "To automate the creation of an interdependent group of Azure resources in a repeatable way.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 149,
    "Pregunta": "Which three objects can be added to a Microsoft Power BI dashboard?",
    "Opciones": [
      "A report page.",
      "A Microsoft PowerPoint slide.",
      "A visualization from a report.",
      "A dataflow.",
      "A text box."
    ],
    "Respuesta": [
      "A report page.",
      "A visualization from a report.",
      "A text box."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 150,
    "Pregunta": "Which two activities can be performed entirely by using the Microsoft Power BI service?",
    "Opciones": [
      "Report and dashboard creation.",
      "Report sharing and distribution.",
      "Data modeling.",
      "Data acquisition and preparation."
    ],
    "Respuesta": [
      "Report and dashboard creation.",
      "Data acquisition and preparation."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 151,
    "Pregunta": "When using the Azure Cosmos DB Gremlin API, the container resource type is projected as a [...].",
    "Opciones": [
      "graph.",
      "table.",
      "partition key.",
      "document."
    ],
    "Respuesta": "graph.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 152,
    "Pregunta": "You are reviewing the data model shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. The data model is a [...].",
    "Opciones": [
      "transactional model.",
      "star schema.",
      "snowflake schema."
    ],
    "Respuesta": "snowflake schema.",
    "Imagen": "question150_151_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 153,
    "Pregunta": "You are reviewing the data model shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. Customer is a [...] table.",
    "Opciones": [
      "fact.",
      "dimension.",
      "bridge."
    ],
    "Respuesta": "dimension.",
    "Imagen": "question150_151_1.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 154,
    "Pregunta": "A bar chart showing year-to date sales by region is an example of which type of analytics?",
    "Opciones": [
      "descriptive.",
      "diagnostic.",
      "predictive.",
      "prescriptive."
    ],
    "Respuesta": "diagnostic.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 155,
    "Pregunta": "Match the types of workloads the appropriate scenario.",
    "Opciones": [
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Micro-batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Micro-batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Micro-batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Micro-batch. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming."
    ],
    "Respuesta": "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Micro-batch.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 156,
    "Pregunta": "Your company plans to load data from a customer relationship management (CRM) system to a data warehouse by using an extract load, and transform (ELT) process. Where does data processing occur for each stage of the ELT process?",
    "Opciones": [
      "Extract: The data warehouse. Load: An in-memory data integration tool. Transform: The CRM system.",
      "Extract: The data warehouse. Load: The CRM system. Transform: An in-memory data integration tool.",
      "Extract: The CRM system. Load: The data warehouse. Transform: An in-memory data integration tool.",
      "Extract: The CRM system. Load: An in-memory data integration tool. Transform: The data warehouse."
    ],
    "Respuesta": "Extract: The CRM system. Load: The data warehouse. Transform: An in-memory data integration tool.",
    "Imagen": "question153.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 157,
    "Pregunta": "You have a SQL query that combines customer data and order data. The query includes calculated columns. You need to persist the SQL query so that other users can use the query. What should you create?",
    "Opciones": [
      "a table.",
      "an index.",
      "scalar function.",
      "a view."
    ],
    "Respuesta": "an index.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 158,
    "Pregunta": "Your company is designing a data store tor internet-connected temperature sensors. The collected data will be used to analyze temperature trends.Which type of data store should you use?",
    "Opciones": [
      "relational.",
      "columnar.",
      "graph.",
      "time series."
    ],
    "Respuesta": "time series.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 159,
    "Pregunta": "In Azure Data Factory, you can use [...] to orchestrate pipeline ctivities that depend on the output of other pipeline activities.",
    "Opciones": [
      "a control flow.",
      "a dataset.",
      "a linked service.",
      "an integration runtime."
    ],
    "Respuesta": "a control flow.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 160,
    "Pregunta": "Match the Azure services to the appropriate locations in the architecture.",
    "Opciones": [
      "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Cosmos DB.",
      "Extract Transform Load (ETL): Azure Table storage. Data warehouse: Azure Cosmos DB.",
      "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Synapse Analytics.",
      "Extract Transform Load (ETL): Azure Synapse Analytics. Data warehouse: Azure Table storage."
    ],
    "Respuesta": "Extract Transform Load (ETL): Azure Data Factory. Data warehouse: Azure Synapse Analytics.",
    "Imagen": "question157.jpg",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 161,
    "Pregunta": "What is a benefit of the Azure Cosmos DB Table API as compared to Azure Table storage?",
    "Opciones": [
      "Supports partitioning.",
      "Provides resiliency if art Azure region fads.",
      "Provides a higher storage capacity.",
      "Supports a multi-master model."
    ],
    "Respuesta": "Supports a multi-master model.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 162,
    "Pregunta": "Which statement is an example of Data Manipulation Language (DML)?",
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
    "Pregunta": "An extract, transform, and load (ETL) process requires [...].",
    "Opciones": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "Respuesta": "that the data target be a relational database.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 164,
    "Pregunta": "Relational data is stored in [...].",
    "Opciones": [
      "A file system as unstructured data.",
      "A hierarchal folder structure.",
      "A tabular form of rows and columns.",
      "Comma-separated value (CSV) files."
    ],
    "Respuesta": "A hierarchal folder structure.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 165,
    "Pregunta": "When you create an Azure SQL database, which account can always connect to the database?",
    "Opciones": [
      "The Azure Active director/ (Azure AO) account that created the database.",
      "The Azure Active Directly Azure AD) administrator account.",
      "The sa account.",
      "The server admin login account of the logical server."
    ],
    "Respuesta": "The server admin login account of the logical server.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 166,
    "Pregunta": "Descriptive analytics tells you [...].",
    "Opciones": [
      "What is most likely to occur in the future.",
      "What occured in the past.",
      "Which actions you can perform to affect outcomes.",
      "Why something occured in the past."
    ],
    "Respuesta": "What occured in the past.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 167,
    "Pregunta": "You have a transactional application that stem data in an Azure SQL managed instance. When should you implement a read-only database replica?",
    "Opciones": [
      "You need to generate reports without affecting the transactional workload.",
      "You need to audit the transactional application.",
      "You need to implement high availability in the event of a regional outage",
      "You need to improve the recovery point objective (RPO)."
    ],
    "Respuesta": "You need to generate reports without affecting the transactional workload.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 168,
    "Pregunta": "Relational data uses [...] to enforce relationships between different tables.",
    "Opciones": [
      "collections.",
      "columns.",
      "keys.",
      "partitions."
    ],
    "Respuesta": "keys.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 169,
    "Pregunta": "An extract,load, and transform (ELT) process requires [...]",
    "Opciones": [
      "a data pipeline that includes a transformation engine.",
      "separate transformation engine.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store."
    ],
    "Respuesta": "data that is fully processed before being loaded to the target data store.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 170,
    "Pregunta": "Match the Azure services to appropriate requirements. [...] Output data to Parquet format.",
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
    "Pregunta": "Match the Azure services to appropriate requirements. [...] Store data that is in Parquet format.",
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
    "Pregunta": "Match the Azure services to appropriate requirements. [...] Persist a tabular representation of data that is stored in Parquet format.",
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
    "Pregunta": "The massively parallel processing (MPP) engine of Azure Synapse Analytics [...].",
    "Opciones": [
      "distributes processing across compute nodes.",
      "distributes processing across control nodes.",
      "redirects client connections across compute nodes.",
      "redirects client connections across control nodes."
    ],
    "Respuesta": "redirects client connections across compute nodes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 174,
    "Pregunta": "Normalization involves eliminating relationships between database tables.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 175,
    "Pregunta": "Normalizing a database reduces data redundancy.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 176,
    "Pregunta": "Normalization improves data integrity.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 177,
    "Pregunta": "Which two types of replica can you us for the storage account?",
    "Opciones": [
      "Read-access geo-redundant storage (RA_GRS).",
      "Zone-redundant storage (ZRS).",
      "Geo-redundant storage (GRS).",
      "Locally-redundant storage (LRS)."
    ],
    "Respuesta": [
      "Read-access geo-redundant storage (RA_GRS).",
      "Geo-redundant storage (GRS)."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 178,
    "Pregunta": "Your company has a reporting solution that has paginated reports. The reports query a dimensional model in a data warehouse. Which type of processing does the reporting solution use?",
    "Opciones": [
      "Stream processing.",
      "Online Transaction Processing (OLTP).",
      "Batch processing.",
      "Online Analytical Processing (OLAP)."
    ],
    "Respuesta": "Online Analytical Processing (OLAP).",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 179,
    "Pregunta": "Match the types of workloads the appropriate scenario. Updates to inventory data will be loaded to adata warehouse every 1,000 transactions.",
    "Opciones": [
      "Batch.",
      "Streaming."
    ],
    "Respuesta": "Batch.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 180,
    "Pregunta": "What are two characteristics of real-time data processing?",
    "Opciones": [
      "Data is processed as it is created.",
      "Low latency is expected.",
      "High latency acceptable.",
      "Data is processed periodically."
    ],
    "Respuesta": [
      "Data is processed as it is created.",
      "Low latency is expected."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 181,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control adn update the operating system version [...].",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 182,
    "Pregunta": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 183,
    "Pregunta": "A graphical tool for managing Azure SQL databases and viewing SQL execution plans.",
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
    "Pregunta": "A Microsoft SQL Server extension that supports connections to SQL Server and provides a rich editing experience for T-SQL.",
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
    "Pregunta": "A lightweight editor that can run on-demand SQL queries and view and save results as text. JSON, or Microsoft Excel files.",
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
    "Pregunta": "A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models. SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports.",
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
    "Pregunta": "Your company if designing an application that will write a high volume of JSON data and will have an application-defined schema. Which type of data store should you use?",
    "Opciones": [
      "Key/value.",
      "Document.",
      "Graph.",
      "Columnar."
    ],
    "Respuesta": "Key/value.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 188,
    "Pregunta": "Your company plans to load data from a customer relationship management (CRM) system to a data warehouse by using an extract load, and transform (ELT) process. Where does data processing occur for each stage of the ELT process?",
    "Opciones": [
      "Extract: The data warehouse. Load: A standalone data analysis tool. Transform: The CRM system.",
      "Extract: The data warehouse. Load: The CRM system. Transform: A standalone data analysis tool.",
      "Extract: The CRM system. Load: The data warehouse. Transform: A standalone data analysis tool.",
      "Extract: The CRM system. Load: A standalone data analysis tool. Transform: The data warehouse."
    ],
    "Respuesta": "Extract: The CRM system. Load: The data warehouse. Transform: A standalone data analysis tool.",
    "Imagen": "question185.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 189,
    "Pregunta": "You have a table named Sales that contains the following data. You need to query the table to return the average sales amount day. The output must produce the following results. How should you complete the query?",
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
    "Pregunta": "What are two uses of data visualization?",
    "Opciones": [
      "Represent trends and patterns over time.",
      "Communicate the significance of data.",
      "Implement machine learning to predict future values.",
      "Consistently implement business logic across reports."
    ],
    "Respuesta": [
      "Represent trends and patterns over time.",
      "Implement machine learning to predict future values."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 191,
    "Pregunta": "Which two Azure services can be used to provision Spark clusters?",
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
    "Pregunta": "To configure an Azure Storage account to support both security at the folder level and atomic directory manipulation [...].",
    "Opciones": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "Respuesta": "Set Account kind to BlobStorage.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 193,
    "Pregunta": "Match the types of data to the appropriate Azure data services. To answer, drag the appropriate data types from the column on the left to its service on the right. Each data type may be used once, more than once, or not at all. NOTE: Each correct match is worth one point.",
    "Opciones": [
      "Box 1: Image files, Box 2: Azure Cosmos DB Gremlin API, Box 3: Key-value pairs.",
      "Box 1: Azure Cosmos DB Gremlin Box 2: Image files, Box 3: Key-value pairs.",
      "Box 1: Key-value pairs, Box 2: Image files, Box 3: Azure Cosmos DB Gremlin."
    ],
    "Respuesta": "Box 1: Image files, Box 2: Azure Cosmos DB Gremlin API, Box 3: Key-value pairs.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 194,
    "Pregunta": "What are two benefits of platform as a service (PaaS) relational database offerings in Azure, such as Azure SQL Database?",
    "Opciones": [
      "Complete control over backup and restore processes.",
      "Access to the latest features.",
      "In-database machine learning services.",
      "Reduced administrative effort for managing the server infrastructure."
    ],
    "Respuesta": [
      "Access to the latest features.",
      "In-database machine learning services."
    ],
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 195,
    "Pregunta": "Azure Synapse Analytics scales storage and compute independently.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 196,
    "Pregunta": "Azure Synapse Analytics can be paused to reduce compute costs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 197,
    "Pregunta": "An Azure Synapse Analytics data warehouse has fixed storage capacity.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 198,
    "Pregunta": "In batch processing [...].",
    "Opciones": [
      "data is always insertes one row at a time.",
      "data is processed in real-time.",
      "latency is expected.",
      "processing car only execute serially."
    ],
    "Respuesta": "latency is expected.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 199,
    "Pregunta": "Your company needs to ensure that in Azure virtual machine can connect to Azure SQL databases without exposing the databases to the internet. What should you use?",
    "Opciones": [
      "Azure DNS.",
      "Azure Application Gateway.",
      "Azure Private link.",
      "Azure Traffic Manager."
    ],
    "Respuesta": "Azure Private link.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 200,
    "Pregunta": "You have a SQL query that combines customer data and order data. The query includes calculated columns. You need to persist the SQL query so that other users can use the query. What should you create?",
    "Opciones": [
      "a table.",
      "an index.",
      "scalar function.",
      "a view."
    ],
    "Respuesta": "a view.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 201,
    "Pregunta": "A relational database must be used when [...].",
    "Opciones": [
      "a dynamic schema is required.",
      "data will be stored as key/value pairs.",
      "storing large images and videos.",
      "strong consistency guarantees are required."
    ],
    "Respuesta": "strong consistency guarantees are required.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 202,
    "Pregunta": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Customer is [...].",
    "Opciones": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "Respuesta": "a root object.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 203,
    "Pregunta": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Address is [...].",
    "Opciones": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "Respuesta": "a nested object.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 204,
    "Pregunta": "You have the following JSON document. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the JSON document. Social media is [...].",
    "Opciones": [
      "a nested array.",
      "a nested object.",
      "a root object."
    ],
    "Respuesta": "a nested array.",
    "Imagen": "question199_200_201_1.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 205,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure require less seup and configuration effort than infrastructure as a service (IaaS) database offerings.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 206,
    "Pregunta": "Platform as a service (PaaS) database offerings in Azure provide administrators with the ability to control and update the operating system version.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 207,
    "Pregunta": "All platform as a service (PaaS) database offerings in Azure can be paused to reduce costs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 208,
    "Pregunta": "You have an e-commerce application that reads and writes data to an Azure SQL database. Which type of processing does the application use?",
    "Opciones": [
      "stream processing.",
      "batch processing.",
      "Online Analytical Processing (OLTP).",
      "Online Transaction Processing (OLTP)."
    ],
    "Respuesta": "Online Transaction Processing (OLTP).",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 209,
    "Pregunta": "Which database transaction property ensures that transactional changes to a database are preserved during unexpected operating system restarts?",
    "Opciones": [
      "consistency.",
      "durability.",
      "isolation.",
      "atomicity."
    ],
    "Respuesta": "durability.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 210,
    "Pregunta": "A processing step within an Azure Data Factory pipeline is an activity.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 211,
    "Pregunta": "Which statement is an example of Data Definition Language (DDL)?",
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
    "Pregunta": "Azure Databricks can consume data from Azure SQL Databate.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 213,
    "Pregunta": "Azure Databricks can consume data from Azure Event Hubs.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 214,
    "Pregunta": "A visualization that illustrates a university's current student enrollment per department is an example of [...] analytics.",
    "Opciones": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "Respuesta": "descriptive.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 215,
    "Pregunta": "[...] natively support the analysis of relationship between entities.",
    "Opciones": [
      "Column family databases.",
      "Document databases.",
      "Graph databases.",
      "Key-value stores."
    ],
    "Respuesta": "Column family databases.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 216,
    "Pregunta": "Azure Data Studio can be used to query an Azure SQL database from a device that runs macOS.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 217,
    "Pregunta": "You have data saved in the following format. Which format was used?",
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
    "Pregunta": "A bank has a system that manages financial transactions. When transferring money between accounts, the system must never retrieve a value for the source account that reflects the balance before the transfer and a value for the destination account that reflects the balance after the transfer. Of which ACID semantic is this an example?",
    "Opciones": [
      "atomicity.",
      "isolation.",
      "durability.",
      "consistency."
    ],
    "Respuesta": "isolation.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 219,
    "Pregunta": "You have data saved in the following format. Which format was used?",
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
    "Pregunta": "Your company is designing a data store that will contain student data. The data has the following format. Which type of data store should you use?",
    "Opciones": [
      "graph.",
      "key/value.",
      "object.",
      "columnar."
    ],
    "Respuesta": "columnar.",
    "Imagen": "question219.jpg",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 221,
    "Pregunta": "Match the types of analytics that can be used to answer the business questions.",
    "Opciones": [
      "Why did sales increase last month?: Cognitive. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Predictive. Detect images of the company's logo included in PDF documents: Prescriptive.",
      "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Prescriptive. Detect images of the company's logo included in PDF documents: Cognitive.",
      "Why did sales increase last month?: Cognitive. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Descriptive. Detect images of the company's logo included in PDF documents: Diagnostic.",
      "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Predictive. Detect images of the company's logo included in PDF documents: Descriptive."
    ],
    "Respuesta": "Why did sales increase last month?: Diagnostic. Provide specific guidance on how to allocate current budget to buy diffetrent inventory items: Prescriptive. Detect images of the company's logo included in PDF documents: Cognitive.",
    "Imagen": "question220.jpg",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 222,
    "Pregunta": "A Microsoft Power BI dashboard is associated with a single workspace.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 223,
    "Pregunta": "A data engineer is responsible for which task?",
    "Opciones": [
      "Design and build analytical models.",
      "Design and implement data stores for analytical workloads.",
      "Explore data to identify trends.",
      "Implement policies, tools. and processes for backup and recovery plans."
    ],
    "Respuesta": "Design and build analytical models.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 224,
    "Pregunta": "You need to use Transact-SQL to query files in Azure Data Lake Storage from an Azure Synapse Analytics data warehouse. What should you use to query the files?",
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
    "Pregunta": "Batch processing can output data to a relational database.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 226,
    "Pregunta": "Which command-line tool can you use to query Azure SQL databases?",
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
    "Pregunta": "What is used to define a query in a stream processing jobs in Azure Stream Analytics?",
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
    "Pregunta": "What is a characteristic of batch processing?",
    "Opciones": [
      "The data ingested during batch processing must be processed as soon as the data is received.",
      "Large datasets must be split into batches of less than 1 GB before the data can be processed.",
      "There is a noticeable time delay between ingesting data and obtaining the data processing results.",
      "Batch processing can only process data that is structured."
    ],
    "Respuesta": "Batch processing can only process data that is structured.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 229,
    "Pregunta": "To configure an Azure Storage account to support access control lists that have object-level permissions [...].",
    "Opciones": [
      "Enable the hierarchical namespace.",
      "Set Account kind to BlobStorage.",
      "Set Performance to Premium.",
      "Set Replication to Read-access geo-redundant storage (RA-GRS)."
    ],
    "Respuesta": "Enable the hierarchical namespace.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 230,
    "Pregunta": "Normalizing a database increases the throughput of writing transactions.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 231,
    "Pregunta": "Analytics systems are more normalized than transactional systems.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 232,
    "Pregunta": "Normalizing a database results in queries that require more joins.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 233,
    "Pregunta": "Match the types of workloads the appropriate scenario.",
    "Opciones": [
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Streaming. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming.",
      "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Batch. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Streaming."
    ],
    "Respuesta": "Data for a product catalog will be loaded every 12 hours to a data warehouse: Batch. Data for online purchases will be loaded to a Gata warehouse as the purchases occur: Streaming. Updates to inventory data will be loaded to a data warehouse every 1,000 transactions: Batch.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 234,
    "Pregunta": "When provisioning an Azure Cosmos DB [...], you need to specify which type of API you will use.",
    "Opciones": [
      "account.",
      "container.",
      "database.",
      "item."
    ],
    "Respuesta": "account.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 235,
    "Pregunta": "Creating closed caption text for audio files is an example of [...] analytics.",
    "Opciones": [
      "cognitive.",
      "descriptive.",
      "predictive.",
      "prescriptive."
    ],
    "Respuesta": "descriptive.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 236,
    "Pregunta": "Match the datastore services to the appropriate descriptions.",
    "Opciones": [
      "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Files.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Files. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Cosmos DB.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Blob storage. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Table storage.",
      "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Table storage."
    ],
    "Respuesta": "Enables the use of SQL queries against data stored in JSON documents: Azure Cosmos DB. Enables users to access data by using the Server Message Block (SMB) version 3 protocol: Azure Files.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 237,
    "Pregunta": "You need to store data by using Azure Table storage. What should you create first?",
    "Opciones": [
      "an Azure Cosmos DB instance.",
      "a storage account.",
      "a blob container.",
      "a table."
    ],
    "Respuesta": "a storage account.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 238,
    "Pregunta": "You have a SQL pool in Azure Synapse Analytics that is only used actively every night for eight hours. You need to minimize the cost of the SQL pool during idle times. The solution must ensure that the data remains intact. What should you do on the SQL pool?",
    "Opciones": [
      "Scale down the data warehouse units (DWUs).",
      "Pause the pool.",
      "Create a user-defined restore point.",
      "Delete the pool."
    ],
    "Respuesta": "Pause the pool.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 239,
    "Pregunta": "[...] presents content defined by a query.",
    "Opciones": [
      "A heap.",
      "A stored procedure.",
      "A view.",
      "An index."
    ],
    "Respuesta": "A view.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 240,
    "Pregunta": "What can be used with native notebook support to query and visualize data by using a web-based interface?",
    "Opciones": [
      "Azure Databricks.",
      "pgAdmin.",
      "Microsoft Power Bl."
    ],
    "Respuesta": "Azure Databricks.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 241,
    "Pregunta": "[...] is responsible for managing the security of the data in a database.",
    "Opciones": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist.",
      "A database administrator."
    ],
    "Respuesta": "A database administrator.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 242,
    "Pregunta": "[...] provides a full range of Power BI data modeling and report editing features.",
    "Opciones": [
      "Microsoft Power BI Desktop.",
      "The Microsoft Power BI service.",
      "The Microsoft Power BI phone app."
    ],
    "Respuesta": "Microsoft Power BI Desktop.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 243,
    "Pregunta": "Which Azure service provides the highest compatibility for databases migrated from Microsoft SQL Server 2019 Enterprise edition?",
    "Opciones": [
      "an Azure SQL Database elastic pool.",
      "Azure SQL Managed Instance.",
      "Azure Database for MySQL.",
      "Azure SQL Database."
    ],
    "Respuesta": "Azure SQL Managed Instance.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 244,
    "Pregunta": "[...] is responsible for identifying which business rules must be applied to the data of a company.",
    "Opciones": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist."
    ],
    "Respuesta": "A data scientist.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 245,
    "Pregunta": "Match the tools to the appropriate descriptions.",
    "Opciones": [
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Azure Data Studio. A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft SQL Server Data Tools (SSMS). A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Microsoft SQL Server Data Tools (SSDT). A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Azure Data Studio.",
      "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft Visual Studio Code. A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: MMicrosoft SQL Server Data Tools (SSMS). A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Microsoft SQL Server Data Tools (SSDT). A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Azure Data Studio."
    ],
    "Respuesta": "A graphical tool for managing SQL Server or Azure SQL databases that supports access, configuration, management, and administration tasks: Microsoft SQL Server Data Tools (SSMS). A lightweight source code editor with an mssql extension that supports connections to SQL Server and a rich editing experience for T-SQL: Microsoft Visual Studio Code. A lightweight editor that can run on-demand SQL queries and view and save results as text, JSON, or Microsoft Excel files: Azure Data Studio. A development tool for building Azure SQL databases, Microsoft SQL Server relational databases, SQL Server Analysis Services (SSAS) data models, SQL Server Integration Services (SSIS) packages, and SQL Server Reporting Services (SSRS) reports: Microsoft SQL Server Data Tools (SSDT).",
    "Imagen": "question251.jpg",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 246,
    "Pregunta": "An extract, transform, and load (ETL) process requires [...].",
    "Opciones": [
      "a matching schema in the data source and the data target.",
      "a target data store powerful enough to transform data.",
      "data that is fully processed before being loaded to the target data store.",
      "that the data target be a relational database."
    ],
    "Respuesta": "data that is fully processed before being loaded to the target data store.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 247,
    "Pregunta": "By default, each Azure SQL database is protected by [...].",
    "Opciones": [
      "a network security group (NSG).",
      "a server-level firewall.",
      "Azure Firewall.",
      "Azure Front Door."
    ],
    "Respuesta": "Azure Firewall.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 248,
    "Pregunta": "Your company is designing a database that will contain session data for a website. The data will include notifications, personalization attributes, and products that are added to a shopping cart. Which type of data store will provide the lowest latency to retrieve the data?",
    "Opciones": [
      "key/value.",
      "graph.",
      "columnar.",
      "document."
    ],
    "Respuesta": "columnar.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 249,
    "Pregunta": "Which two settings can you configure at the container level? Each correct answer presents a complete solution.",
    "Opciones": [
      "the throughput.",
      "the read region.",
      "the partition key.",
      "the API."
    ],
    "Respuesta": [
      "the throughput.",
      "the partition key."
    ],
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 250,
    "Pregunta": "[...] is responsible for creating visuals and charts that help a company make informed decisions.",
    "Opciones": [
      "A data analyst.",
      "A data engineer.",
      "A data scientist.",
      "A database administrator"
    ],
    "Respuesta": "A data engineer.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 251,
    "Pregunta": "A [...] is a chart of colored rectangles. The size of the rectangles represent the relative value of each item. The chart can be hierarchical,displaying data as a set of rectangles nested within the main rectangle.",
    "Opciones": [
      "line chart.",
      "matrix.",
      "scatter.",
      "treemap."
    ],
    "Respuesta": "treemap.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 252,
    "Pregunta": "A database object that holds data.",
    "Opciones": [
      "Index.",
      "View.",
      "Table."
    ],
    "Respuesta": "Table.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 253,
    "Pregunta": "A database object whose content is defined by a query.",
    "Opciones": [
      "Index.",
      "View.",
      "Table."
    ],
    "Respuesta": "View.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 254,
    "Pregunta": "A database object that helps improve the speed of data retrieval.",
    "Opciones": [
      "Index.",
      "View.",
      "Table."
    ],
    "Respuesta": "Index.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 255,
    "Pregunta": "What are two characteristics of real-time data processing? Each correct answer present a complete solution.",
    "Opciones": [
      "Data is processed as it is created.",
      "Low latency is expected.",
      "High latency acceptable.",
      "Data is processed periodically."
    ],
    "Respuesta": [
      "Data is processed as it is created.",
      "Low latency is expected."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 256,
    "Pregunta": "In Azure Table storage, each row in a table must be uniquely identified by which two components?",
    "Opciones": [
      "a timestamp.",
      "a range.",
      "a row key.",
      "a partition key."
    ],
    "Respuesta": [
      "a row key.",
      "a partition key."
    ],
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 257,
    "Pregunta": "Match the terms to the appropriate descriptions.",
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
    "Pregunta": "An Azure Storage account must have [...] enabled to support Azure Data Lake Storage.",
    "Opciones": [
      "Blob soft delete.",
      "Hierarchical namespace.",
      "Large file shares.",
      "Versioning."
    ],
    "Respuesta": "Hierarchical namespace.",
    "Categoria": "NoRelacionalAzure"
  },
  {
    "Numero": 259,
    "Pregunta": "You need to store event log data that is semi-structured and received as the logs occur. What should you use?",
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
    "Pregunta": "Which three objects can be added to a Microsoft Power BI dashboard? Each correct answer presents a complete solution.",
    "Opciones": [
      "a report page.",
      "a Microsoft PowerPoint slide.",
      "a visualization from a report.",
      "a dataflow.",
      "a text box."
    ],
    "Respuesta": [
      "a report page.",
      "a visualization from a report.",
      "a text box."
    ],
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 261,
    "Pregunta": "[...] is a platform as a service (PaaS) relational data service that uses massively parallel processing (MPP).",
    "Opciones": [
      "Azure SQL Database.",
      "Azure Synapse Analytics.",
      "Azure Database for MariaDB.",
      "SQL Server on Azure on Azure virtual machines."
    ],
    "Respuesta": "Azure Synapse Analytics.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 262,
    "Pregunta": "You need to ensure that users use multi-factor authentication (MFA) when connecting to an Azure SQL database. Which type of authentication should you use?",
    "Opciones": [
      "service principal authentication.",
      "Azure Active Directory (Azure AD) authentication.",
      "SQL authentication.",
      "certificate authentication."
    ],
    "Respuesta": "Azure Active Directory (Azure AD) authentication.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 263,
    "Pregunta": "You need to store event log data that is semi-structured and received as the logs occur. What should you use?",
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
    "Pregunta": "In a SQL statement, [...] are examples of aggregate functions.",
    "Opciones": [
      "FROM and WHERE.",
      "GROUP BY and ORDER BY.",
      "JOIN and MERGE.",
      "MAX and MIN."
    ],
    "Respuesta": "MAX and MIN.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 265,
    "Pregunta": "You have data saved in the following format. Which format was used?",
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
    "Pregunta": "Online analytical processing (OLAP) systems are particurarly suitable for analytical workloads because data is [...].",
    "Opciones": [
      "limited in size.",
      "optimized for transactions.",
      "pre-aggregated.",
      "read-only."
    ],
    "Respuesta": "optimized for transactions.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 267,
    "Pregunta": "You need to create an Azure resource to store data in Azure Table storage. Which command should you run?",
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
    "Pregunta": "What is the primary purpose of a data warehouse?",
    "Opciones": [
      "To provide answers to complex queries that rely on data from multiple sources.",
      "To provide transformation services between source and target data stores.",
      "To provide read-only storage of relational and non-relational historical data.",
      "To provide storage for transactional line-of-business (LOB) applications."
    ],
    "Respuesta": "To provide answers to complex queries that rely on data from multiple sources.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 269,
    "Pregunta": "Which T-SQL statement should be used to instruct a database management system to use an index instead of performing a full table scan?",
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
    "Pregunta": "Which component of Azure Data Factory enables you to define a sequence of activities including for each iterators?",
    "Opciones": [
      "Control flow.",
      "Linked services.",
      "Datasets.",
      "The integration runtime."
    ],
    "Respuesta": "Linked services.",
    "Categoria": "AnaliticaAzure"
  },
  {
    "Numero": 271,
    "Pregunta": "Azure SQL Database includes a fully managed backup service.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 272,
    "Pregunta": "Azure SQL Database has built-in high availability.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 273,
    "Pregunta": "Azure SQL Database can use Azure Advanced Threat Protection (ATP).",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "RelacionalAzure"
  },
  {
    "Numero": 274,
    "Pregunta": "Database administrators apply data cleansing routines and turn data into useful information.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 275,
    "Pregunta": "Data engineers manage databases, store backup copies of data, and restore data in the event of failure.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "No.",
    "Categoria": "ConceptosDatos"
  },
  {
    "Numero": 276,
    "Pregunta": "Data analyst create data visuals and enable companies to make data-driven decisions.",
    "Opciones": [
      "Yes.",
      "No."
    ],
    "Respuesta": "Yes.",
    "Categoria": "ConceptosDatos"
  }
];

