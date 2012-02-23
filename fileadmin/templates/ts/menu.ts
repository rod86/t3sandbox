
#Main menu
lib.menu = HMENU
lib.menu {
	entryLevel = 0
	wrap = <ul class="tabs">|</ul>
	
	1 = TMENU
	1 {
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