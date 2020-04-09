// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (dades)",description:""},service:{caption:"INSPIRE (servei)",description:""}},dataThemeKeywords:{caption:"Tema de dades de l’INSPIRE"},inspireServiceType:{discovery:"Servei de descoberta",view:"Servei de visualització",download:"Servei de baixada",transformation:"Servei de transformació",invoke:"Servei d’invocació",other:"Un altre servei"},keywordSections:{dataTheme:"Tema de dades de l’INSPIRE",serviceCategory:"Categoria de servei ISO 19119",gemetConcept:"Concepte GEMET",otherKeywords:"Altres paraules clau"},LanguageCode:{bul:"Búlgar",cze:"Txec",dan:"Danès",dut:"Neerlandès",eng:"Anglès",est:"Estonià",fin:"Finès",fre:"Francès",ger:"Alemany",gre:"Grec",hun:"Hongarès",gle:"Gaèlic (irlandès)",ita:"Italià",lav:"Letó",lit:"Lituà",mlt:"Maltès",pol:"Polonès",por:"Portuguès",rum:"Romanès",slo:"Eslovac",slv:"Eslovè",spa:"Espanyol",swe:"Suec",chi:"Xinès",kor:"Coreà",nor:"Noruec",rus:"Rus",tur:"Turc"},otherConstraints:{noLimitations:"Sense limitacions",confidentialityOfProceedings:"La confidencialitat dels procediments de les autoritats públiques...",internationalRelations:"Relacions internacionals, seguretat pública o defensa nacional",courseOfJustice:"El curs de la justícia, la capacitat de qualsevol persona de rebre un judici just...",confidentialityOfCommercial:"La confidencialitat de la informació comercial o industrial...",intellectualProperty:"Drets de propietat intel·lectual",confidentialityOfPersonalData:"La confidencialitat de fitxers o dades personals...",interestsOrProtection:"Els interessos o protecció de qualsevol persona que hagi proporcionat la informació...",protectionOfEnvironment:"La protecció de l’entorn amb el qual es relaciona la informació...",freeText:"Text lliure"},serviceType:{humanInteractionService:"100 Serveis d’interacció geogràfica humana",humanCatalogueViewer:"101 Visor de catàleg",humanGeographicViewer:"102 Visor geogràfic",humanGeographicSpreadsheetViewer:"103 Visor geogràfic de full de càlcul",humanServiceEditor:"104 Editor de serveis",humanChainDefinitionEditor:"105 Editor de definicions de cadenes",humanWorkflowEnactmentManager:"106 Administrador de promulgacions de flux de treball",humanGeographicFeatureEditor:"107 Editor d’entitats geogràfiques",humanGeographicSymbolEditor:"108 Editor de símbols geogràfics ",humanFeatureGeneralizationEditor:"109 Editor de generalització d’entitats",humanGeographicDataStructureViewer:"110 Visor d’estructura de dades geogràfiques",infoManagementService:"200 Servei d’administració d’informació o models geogràfics",infoFeatureAccessService:"201 Servei d’accés a les entitats",infoMapAccessService:"202 Servei d’accés als mapes",infoCoverageAccessService:"203 Servei d’accés a la cobertura",infoSensorDescriptionService:"204 Servei de descripció de sensors",infoProductAccessService:"205 Servei d’accés a productes",infoFeatureTypeService:"206 Servei de tipus d’entitat",infoCatalogueService:"207 Servei de catàleg",infoRegistryService:"208 Servei de registre",infoGazetteerService:"209 Servei de diccionari geogràfic",infoOrderHandlingService:"210 Servei de tractament d’ordres",infoStandingOrderService:"211 Servei d’ordres fixes",taskManagementService:"300 Serveis d’administració de tasques o flux de treball geogràfics",chainDefinitionService:"301 Servei de definició de cadenes",workflowEnactmentService:"302 Servei de promulgacions de flux de treball",subscriptionService:"303 Servei de subscripció",spatialProcessingService:"400 Serveis de processament geogràfic: espacial",spatialCoordinateConversionService:"401 Servei de conversió de coordenades",spatialCoordinateTransformationService:"402 Servei de transformació de coordenades",spatialCoverageVectorConversionService:"403 Servei de conversió de cobertura o vector",spatialImageCoordinateConversionService:"404 Servei de conversió de coordenades d’imatge",spatialRectificationService:"405 Servei de rectificació",spatialOrthorectificationService:"406 Servei d’ortorectificació",spatialSensorGeometryModelAdjustmentService:"407 Servei d’ajust del model de geometria del sensor",spatialImageGeometryModelConversionService:"408 Servei de conversió del model de geometria d’imatge",spatialSubsettingService:"409 Servei de subconjunts",spatialSamplingService:"410 Servei de mostreig",spatialTilingChangeService:"411 Servei de canvi de tessel·les",spatialDimensionMeasurementService:"412 Servei de mesura de dimensions",spatialFeatureManipulationService:"413 Serveis de manipulació d’entitats",spatialFeatureMatchingService:"414 Servei de geocodificació d’entitats",spatialFeatureGeneralizationService:"415 Servei de generalització d’entitats",spatialRouteDeterminationService:"416 Servei de determinació de rutes",spatialPositioningService:"417 Servei de posicionament",spatialProximityAnalysisService:"418 Servei d’anàlisi de proximitat",thematicProcessingService:"500 Serveis de processament geogràfic: temàtic",thematicGoparameterCalculationService:"501 Servei de càlcul de paràmetres geogràfics",thematicClassificationService:"502 Servei de classificació temàtica",thematicFeatureGeneralizationService:"503 Servei de generalització d’entitats",thematicSubsettingService:"504 Servei de subconjunts",thematicSpatialCountingService:"505 Servei de comptatge espacial",thematicChangeDetectionService:"506 Servei de detecció de canvis",thematicGeographicInformationExtractionService:"507 Serveis d’extracció d’informació geogràfica",thematicImageProcessingService:"508 Servei de processament d’imatges",thematicReducedResolutionGenerationService:"509 Servei de generació de resolució reduïda",thematicImageManipulationService:"510 Serveis de manipulació d’imatges",thematicImageUnderstandingService:"511 Serveis de comprensió d’imatges",thematicImageSynthesisService:"512 Serveis de síntesi d’imatges",thematicMultibandImageManipulationService:"513 Manipulació d’imatges multibanda",thematicObjectDetectionService:"514 Servei de detecció d’objectes",thematicGeoparsingService:"515 Servei d’anàlisi geogràfica",thematicGeocodingService:"516 Servei de geocodificació",temporalProcessingService:"600 Serveis de processament geogràfic: temporal",temporalReferenceSystemTransformationService:"601 Servei de transformació de sistemes de referència temporal",temporalSubsettingService:"602 Servei de subconjunts",temporalSamplingService:"603 Servei de mostreig",temporalProximityAnalysisService:"604 Servei d’anàlisi de proximitat temporal",metadataProcessingService:"700 Serveis de processament geogràfic: metadades",metadataStatisticalCalculationService:"701 Servei de càlcul estadístic",metadataGeographicAnnotationService:"702 Serveis d’anotació geogràfica",comService:"800 Serveis de comunicació geogràfica",comEncodingService:"801 Servei de codificació",comTransferService:"802 Servei de transferència",comGeographicCompressionService:"803 Servei de compressió geogràfica",comGeographicFormatConversionService:"804 Servei de conversió de format geogràfic",comMessagingService:"805 Servei de missatgeria",comRemoteFileAndExecutableManagement:"806 Administració de fitxers remots i executables"},useLimitation:{noCondition:"No s’aplica cap condició",unknownCondition:"Condicions desconegudes",freeText:"Text lliure"}});