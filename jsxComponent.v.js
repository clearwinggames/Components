/*
   JSX Component is meant to provide easy use of JSX in Vue Templates like so
   
   (this is a vue template example):
   <div>
      <span>
         Here is some vue template stuff but now we need jsx <br />
         <jsx-component jsx-function='someJSXFunction()'></jsx-component><br />
         Then we will have essentially just put the result of someJSXFunction call JSX straight into the template as useable HTML         
      </span>
   </div>
   (end vue template example)
   
   It is offered as-is without warranty
   Kevin Phillips 2021
*/
Vue.component('jsx-component', 
{
    props: ['jsxFunction'],
    data: function() {
      return {
          jsx: null
      };
    },
    methods: {
       renderJSX: function() {
           if (this.jsx != null) return this.jsx.outerHTML;
         
           let me = this;
         
           setTimeout(() => {
             me.jsx = me.jsxFunction();
           }, 10);
       }
    },
    template:
  `
  <div>
     <span v-html="renderJSX()"></span>
  </div>    
  `
});
