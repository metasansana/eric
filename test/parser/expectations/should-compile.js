const x = `
import Gen from 'taino/lib/Generator'import Wizard from 'taino/lib/Wizard'let tasks = {};class init extends Gen { constructor() { this.context = {'n':'one',}; } run() { this.file('LICENSE','LICENSE'); } } 
           tasks['init'] = init;class generateEndPointTests extends Gen { constructor() { super(); this.templatePath = process.env.TEMPLATE_PATH;this.list = [1,2,{}]; } run() { this.file('test/products','endpoint.template',{'id':this.someMethod(),'collection':"products",'records_file':"./assets/products.json",'new':{'name':"Wizbang Widget",'manufacturer':"Wizbang",'description':"It wizzes it bangs",'category':"Bangers",},});this.file('test/products','endpoint.template',{'id':"id",'collection':this.someValue,'records_file':"./assets/products.json",'new':{'name':"Wizbang Widget",'manufacturer':"Wizbang",'description':"It wizzes it bangs",'category':"Bangers",},});this.file('test/products','endpoint.template',{'id':"id",'collection':"products",'records_file':"./assets/products.json",'new':{'name':"Wizbang Widget",'manufacturer':"Wizbang",'description':"It wizzes it bangs",'category':"Bangers",},}); } } 
           tasks['generateEndPointTests'] = generateEndPointTests;export default tasks;
`;

export default x;
