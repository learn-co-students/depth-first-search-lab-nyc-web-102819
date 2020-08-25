function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [];
    stack.push(rootNode);
    let visited = [rootNode];
    while (stack.length != 0) {
        let v = stack.pop();
        if (!v.discovered) {
            v.discovered = true;
            findAdjacent(v.name, vertices, edges).forEach(function(node){
                visited.push(node);
                stack.push(node);
            })
        }
    }
    return visited;
}

function findAdjacent(nodeName, vertices, edges){
    return edges.filter(edge => edge.includes(nodeName))
    .map(edge => edge.filter(node => node != nodeName)[0])
    .map(name => findNode(name, vertices)).filter(node => !node.discovered)
}

function findNode(nodeName, vertices){
    return vertices.find(vertex => vertex.name == nodeName) 
}