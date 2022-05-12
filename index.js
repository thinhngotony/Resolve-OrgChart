// var data = [
//     { 'id': 'parent', 'role': 'Board', 'color': '#71AF17' },
//     { 'id': '1', 'role': 'General Manager', 'manager': 'parent', 'color': '#71AF17' },
//     { 'id': '2', 'role': 'Human Resource Manager', 'manager': '1', 'color': '#1859B7' },
//     { 'id': '3', 'role': 'Trainers', 'manager': '2', 'color': '#2E95D8' },
//     { 'id': '4', 'role': 'Recruiting Team', 'manager': '2', 'color': '#2E95D8' }, 
//     { 'id': '6', 'role': 'Design Manager', 'manager': '1', 'color': '#1859B7' },
//     { 'id': '7', 'role': 'Design Supervisor', 'manager': '6', 'color': '#2E95D8' },
//     { 'id': '8', 'role': 'Development Supervisor', 'manager': '6', 'color': '#2E95D8' },
//     { 'id': '11', 'role': 'Assistant General Manager', 'manager': '1', 'color': '#71AF17' }
// ];

const data = [
    {
        "id": 4710,
        "name": "Tamzyn French",
        "photo": "/photos/4710.jpg",
        "superior": null
    },
    {
        "id": 8180,
        "name": "Salome Simoes",
        "photo": "/photos/8180.jpg",
        "superior": 4710
    },
    {
        "id": 6551,
        "name": "Trevor Virtue",
        "photo": "/photos/6551.jpg",
        "superior": 4710
    },
    {
        "id": 2641,
        "name": "Eugenia Anders",
        "photo": "/photos/2641.jpg",
        "superior": 8180
    },
    {
        "id": 3671,
        "name": "Andrew Kazantzis",
        "photo": "/photos/3671.jpg",
        "superior": 8180
    },
    {
        "id": 6691,
        "name": "Verona Blair",
        "photo": "/photos/6691.jpg",
        "superior": 8180
    },
    {
        "id": 6151,
        "name": "Jane Meldrum",
        "photo": "/photos/6151.jpg",
        "superior": 6551
    },
    {
        "id": 3051,
        "name": "Desiree Burch",
        "photo": "/photos/3051.jpg",
        "superior": 6551
    },
    {
        "id": 8971,
        "name": "Daly Harry",
        "photo": "/photos/8971.jpg",
        "superior": 6551
    },
    {
        "id": 9051,
        "name": "Hayman Andrews",
        "photo": "/photos/9051.jpg",
        "superior": 3671
    }
]



var items = new ej.data.DataManager(data);


var diagram = new ej.diagrams.Diagram({
    width: "1000px",
    height: "600px",
    dataSourceSettings: {
        id: 'id', parentId: 'superior', dataManager: items,
        doBinding: function (node, data) {
            // You will get the employee information in data argument and bind that value directly to node's built-in properties.
            console.log(node);
            node.annotations = [{ content: data.name + "\n"+ data.id + "\nSuperior " + data.superior }];
            node.style = { fill: data.color };
            // node.photo = [{ content: "https://media.techz.vn/resize_x650x/media2019/upload2019/2022/05/07/ngoctrinh5_07052022225410.jpg" }];
            // node.shape = {type:"image", source: "https://media.techz.vn/resize_x650x/media2019/upload2019/2022/05/07/ngoctrinh5_07052022225410.jpg"};
        }
    },
    layout: {
        type: 'OrganizationalChart',
        getLayoutInfo: function (node, options) {
            // you can get the children belongs to the parent node and decide the assistants from that children.
            // if (node.data.superior === 'Salome Simoes' ) {
            //     options.assistants.push(options.children[2]);
            //     options.children.splice(2, 1);
            // }
        }
    },
    getNodeDefaults: nodeDefaults,
    getConnectorDefaults: connectorDefaults,
    // hide the gridlines in the diagram
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None }
});
diagram.appendTo('#diagram');

function nodeDefaults(node) {
    node.annotations[0].style.color = "white";
    node.width = 120; 
    return node;
}

function connectorDefaults(connector) {
    connector.type = 'Orthogonal';
    connector.targetDecorator = { shape: 'None' };
    return connector;
}
