hide("elem2");hide("elem3");hide("elem4");document.body.addEventListener("keydown",e=>{if(e.key==="Enter"){log_in()}});function show_A(){hide("elem");hide("elem3");hide("elem4");show("elem2")}function show_H(){hide("elem3");show("elem");hide("elem2");hide("elem4")}function show_P(){hide("elem");show("elem3");hide("elem2");hide("elem4")}function show_D(){hide("elem");hide("elem3");hide("elem2");show("elem4")}function select(e){l=["s1","s2","s3","s4"];for(i=0;i<4;i++){if(l[i]==e){document.getElementById(l[i]).classList.remove("noselect");document.getElementById(l[i]).classList.add("select")}else{document.getElementById(l[i]).classList.replace("select","noselect")}}}function hide(e){document.getElementById(e).classList.remove("visble");document.getElementById(e).classList.add("hide");setTimeout(()=>{document.getElementById(e).style.display="none"},500)}function show(e){document.getElementById(e).classList.remove("hide");document.getElementById(e).classList.add("visble");setTimeout(()=>{document.getElementById(e).style.display="block"},500)}function hideall(){document.getElementById("all").style.display="none";document.getElementById("wrapper").style.display="block"}function log_in(){if(document.getElementById("pwd").value=="code"){document.getElementById("all").style.display="block";document.getElementById("wrapper").style.display="none"}}function toggleSidebar(){const e=document.getElementById("sidebar");if(e.style.left==="-250px"){e.style.left="0"}else{e.style.left="-250px"}}