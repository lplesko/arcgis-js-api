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

define(["./panels/US/Population","./panels/US/Households","./panels/US/Income","./panels/US/NetWorth","./panels/US/HomeValue","./panels/US/Spending","./panels/US/Electronics","./panels/US/Internet","./panels/US/Pets","./panels/US/Businesses","./panels/US/Employees","./panels/US/Education","./panels/US/Mortgage","./panels/US/Housing","./panels/US/JourneyToWork","./panels/US/Health","./panels/US/Tapestry","./panels/US/AtRisk","./panels/US/LifeStyle","./panels/US/Crime","dojo/i18n!esri/nls/jsapi"],(function(e,n,a,t,o,i,s,r,l,C,A,S,c,u,_,p,h,f,P,E,I){I=I.geoenrichment.dijit.ReportPlayer.VariableStates;var d={US:{"TOTPOP_CY, POPGRW10CY, POPGRWCYFY":[e.annualGrowth],MEDAGE_CY:[e.agePyramid],"ACSOTNOA65, ACSSPNOA65":[e.pop65PlusNoEnglish],DPOP_CY:[e.daytimePopulation],"ACSCIVNINS, ACS0ONEHI, ACS19ONEHI, ACS35ONEHI, ACS65ONEHI, ACSCIVNI0, ACSCIVNI19, ACSCIVNI35, ACSCIVNI65, ACS0NOHI, ACS19NOHI, ACS35NOHI, ACS65NOHI":[e.populationACS],"GENALPHACY, GENZ_CY, MILLENN_CY, GENX_CY, BABYBOOMCY, OLDRGENSCY":[e.generationComparison],"GENALPHAFY, GENZ_FY, MILLENN_FY, GENX_FY, BABYBOOMFY, OLDRGENSFY":[e.generationComparison],MEDHINC_CY:[a.householdsByIncome],MEDDI_CY:[a.disposableIncome],PCI_CY:[a.perCapitaIncome],MHIGRWCYFY:[a.annualGrowth],"AVGHHSZ_CY, TOTHH_CY":[n.avgHouseholdSize],ACSOVEH0:[n.householdsWithNoVehicles],"EDUCBASECY, NOHS_CY, SOMEHS_CY, HSGRAD_CY, SMCOLL_CY, ASSCDEG_CY":[S.educationalAttainment],S01_BUS:[C.businessSummaryBySIC],"S01_EMP, UNEMPRT_CY":[A.civilianPopulation16Plus],EMP_CY:[A.laborForceByOccupation],MEDNW_CY:[t.netWorth],MEDVAL_CY:[o.homeValue],"X5001_A, X5001_X":[i.apparelMenVsWomen],X8001_A:[i.healthCare],"X1130_A, X1131_X":[i.eatingOut],"X4100_A, MP19013a_B":[i.purchasedMostRecentComputers],X1003_A:[i.avgSpentOnFoodAtStores],X7001_A:[i.travel],X9008_A:[i.interestInSports],X9024_X:[i.purchasedMusic],X9045_A:[i.timeOnline],"X9078_A, X9079_A":[i.movieGenre],X8002_X:[i.annualHealthExpenditures],X8018_X:[i.medicalServices],"ACS65MEDCR, ACS65HI2PM, ACS65HI2EM, ACS65HI2MM":[i.medicarePopulation65Plus],X9001_X:[i.entertainmentRecreation],X15001_X:[i.householdGoods],X4008_X:[i.householdServices],X3004_X:[c.dwellingMortgage],"X3036_X, X3004_A, ACSMEDCRNT, ACSAVGCRNT":[u.renterExpenses],"ACSWORKERS, ACSDRALONE, ACSPUBTRAN, ACSCARPOOL, ACSWALKED, ACSBICYCLE, MP28108A_B":[_.jorneyToWork],"MP14001a_B, MP14002a_B":[p.exercise],MP19014a_B:[s.cellPhonePlan],"MP19003A_B, MP19004A_B, MP19005A_B, MP19007A_B, MP19001A_B":[r.internetConnectionHome],MP26004h_B:[l.dogProducts],MP26003h_B:[l.catProducts],MP26001h_B:[l.hhOnwsAnyPet],TSEGNAME:[h.tapestry],ACSHHDIS:[f.householdsWithDisability],X9073_A:[P.musicAndTheater],"CRMCYPROC, CRMCYTOTC, CRMCYPERC":[E.crimeIndex]}},O={US:{Population:e,Households:n,Income:a,NetWorth:t,HomeValue:o,Spending:i,Electronics:s,Internet:r,Pets:l,Businesses:C,Employees:A,Education:S,Mortgage:c,Housing:u,JourneyToWork:_,Health:p,Tapestry:h,AtRisk:f,LifeStyle:P,Crime:E}},M={n:I.stateNumber_short,p:I.statePercent_short,a:I.stateAverage_short,i:I.stateIndex_short,r:I.stateReliability_short},N={p:I.statePercent,a:I.stateAverage,i:I.stateIndex,r:I.stateReliability};for(var Y in d){var v=d[Y];Object.keys(v).forEach((function(e){-1!==e.indexOf(",")&&(e.split(",").forEach((function(n){n=n.trim();var a=v[e];a.forEach((function(e){e.fieldInfo.infographicJson&&(e.fieldInfo.infographicJson.style=e.fieldInfo.infographicJson.style||{}),!e.name&&e.fieldInfo.isChart&&(e.name=e.fieldInfo.chartJson.visualProperties.title.text)})),v[n]=a})),delete v[e])}))}var m=/\$\{.*?\}/g;return{LIBRARY:d,STATE_LOCALIZATION_MAP:N,STATE_LOCALIZATION_MAP_SHORT:M,getById:function(e){var n,a,t=e.split(".");return(a=(n=O[t[0]])&&n[t[1]])&&a[t[2]]},collectSubstitutionVariables:function(){var e={};for(var n in O){var a={fields:[],variables:[]};function t(e,n){var t=e[n],o=t&&t.match(m);o&&o.forEach((function(e){var n=e.replace("${","").replace("}","").split(":");-1===a.variables.indexOf(n[0])&&a.variables.push(n[0]),-1===a.fields.indexOf(n[1])&&a.fields.push(n[1])}))}e[n]=a,this._traversePanels(t)}return e},replaceSubstitutionVariables:function(e){var n={};for(var a in e){var t=e[a];t.variables.forEach((function(e){t.fields.forEach((function(a){n["${"+e.fullName+":"+a+"}"]=e[a]}))}))}this._traversePanels((function(e,a){var t=e[a],o=t&&t.match(m);o&&(o.forEach((function(e){t=t.replace(e,n[e])})),e[a]=t)}))},_traversePanels:function(e){var n=O[Y];for(var a in n){var t=n[a];for(var o in t){var i=t[o];if(i.fieldInfo&&i.fieldInfo.chartJson){var s=i.fieldInfo.chartJson,r=s.visualProperties;e(r.title,"text"),r.xAxis&&e(r.xAxis,"title"),r.yAxis&&e(r.yAxis,"title"),s.seriesItems.forEach((function(n){e(n,"label"),n.points.forEach((function(n){e(n,"label")}))}))}}}}}}));