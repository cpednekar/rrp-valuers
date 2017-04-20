

/** Toggles different projects based on its type */
function toggleProjectType(sourceObject){
    /* Find the element triggering the event. */
    var sourceElement = sourceObject;//event.currentTarget;
    
    /* Check whether source is a project type */
    /* Note - Use indexOf() instead of includes() to check whether class name includes a particular class. incldes() not supported by i.e. */
    if(sourceElement.className.indexOf("project-type") >= 0){

        /* 1. Get projects */
        var projects = document.getElementById("projects");             

        /* 2. Get all project types and project lists */
        var nodesProjectType = projects.getElementsByClassName("project-type");    
        var nodesProjectList = projects.getElementsByClassName("project-list");
        var nodesDivExpandCollapse = projects.getElementsByClassName("ic-expand-collapse");

        
        /* 3. Toggle project list for selected project type AND hide all other project-lists other than that for selected project-type */
        for(i = 0; i < nodesProjectType.length; i++){
            if(nodesProjectType[i] != sourceElement){
                //hide project-list and toggle off arrow icon
                nodesProjectList[i].style.opacity = "0";
                nodesProjectList[i].style.height = "0em";
                nodesDivExpandCollapse[i].style.transform = "rotate(0deg)";
            }
            else{
                //if one of project-type element is clicked
                //      if project-list is hidden; display project-list and toggle on arrow icon
                //      else if project-list is displaying; hide project-list and toggle off arrow icon
                if(nodesProjectList[i].style.opacity == "0" || nodesProjectList[i].style.opacity == ""){
                    nodesProjectList[i].style.opacity = "1";
                    nodesProjectList[i].style.height = "auto";
                    nodesProjectList[i].style.border = "0.1em solid #DA2244"
                    nodesProjectList[i].style.borderRadius = ".5em";
                    nodesDivExpandCollapse[i].style.transform = "rotate(90deg)";
                }
                else{
                    nodesProjectList[i].style.opacity = "0";
                    nodesProjectList[i].style.height = "0em";
                    nodesDivExpandCollapse[i].style.transform = "rotate(0deg)";
                }
            }
            
        }
        
    
    }


}

