
#base URL
config.baseURL = http://localhost/t3sandbox/



#page setup
page = PAGE
page.typeNum = 0
page.10 = USER
page.10.userFunc = tx_templavoila_pi1->main_page

lib.pagetitle = TEXT
lib.pagetitle {
	data = page:title
	wrap = <h1>|</h1>
}

#head (js & css)
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/ts/head.ts">

#menu
<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/templates/ts/menu.ts">





#empty blocks for tests
lib.header = HTML
lib.header.value (	
	<div class="well">&nbsp;</div>
) 

lib.submenu = HTML
lib.submenu.value (	
	<div class="well">&nbsp;</div>
)

lib.leftBlock = HTML
lib.leftBlock.value (
	<div class="well">&nbsp;</div>
)

lib.footer = TEXT
lib.footer.value = This is a test project