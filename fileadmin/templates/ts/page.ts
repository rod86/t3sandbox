
#base URL
config.baseURL = http://localhost/t3sandbox/

#page setup
page = PAGE
page.typeNum = 0
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page

#footer
lib.footer = TEXT
lib.footer.value = This is a test project

#head (js & css)
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/ts/head.ts">

#menu
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/ts/menu.ts">