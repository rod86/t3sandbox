
#Main menu
lib.menu = HMENU
lib.menu {
	entryLevel = 0
	wrap = <ul class="nav nav-pills">|</ul>
	
	1 = TMENU
	1 {
		noBlur = 1
		
		NO {
			allWrap = <li>|</li>
		}
		
		ACT < .NO
		ACT = 1
		ACT {
			allWrap = <li class="active">|</li>
		}
	}
}