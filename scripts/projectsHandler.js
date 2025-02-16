var projectsDiv = document.getElementById("projects");
for (let i = 0; i < Projects.length; i++) {
    
    var projectDiv = document.createElement("div");
    var divStyle = document.createAttribute("style");
    divStyle.value = "display:inline-block; width: 300px; margin: 10px; background-color: #f2f2f2; border: 1px solid #d3d3d3; padding: 10px; border-radius: 5px;";
    projectDiv.setAttributeNode(divStyle);
    
    // h3
    var title = document.createElement("h3");
    var titleNode = document.createTextNode(Projects[i].name);
    title.appendChild(titleNode);

    //p ( description )
    var p = document.createElement("p");
    var pNode = document.createTextNode(Projects[i].description);
    p.appendChild(pNode);


    //link
    var p2 = document.createElement("p");  
    var a = document.createElement("a");
    a.href = Projects[i].github;
    a.textContent = "source";
    a.target = "_blank"; 
    p2.appendChild(a);

    
    projectDiv.appendChild(title);
    projectDiv.appendChild(p);
    projectDiv.appendChild(p2);
    

    projectsDiv.appendChild(projectDiv);
   

}