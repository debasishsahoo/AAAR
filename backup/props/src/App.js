import SingleProp from "./components/SingleProp";
import MultipleProp from "./components/MultipleProp";
import ValueProp from "./components/ValueProp";
import PassingProp from './components/PassingProps'
import OptionalProps from "./components/OptionalProps";
import SpradingProps from './components/SpradingProps'
import ChildProps from "./components/ChildProps";
//import ValidProps from './components/PropValidation'
import Product from './components/ProductCard'
function App() {
  let age = 20
  let anydata = 'Azim'
  let x = { a: 'Angular', b: 'React' }
  return (
    <>
      {/* <SingleProp data="Debasish" />
      <MultipleProp x='debasish' y='sahoo' />
      <ValueProp
        strData='This is String Data'
        tempData={`Template Value is ${age}`}
        numdata={23}
        booldata={false}
        arrdata={
          [
            { id: 1, name: 'deb' },
            { id: 2, name: 'anjani' }
          ]
        }
        objdata={{ id: 1, name: 'deb' }}
        jsxData={2 + 2 - 3 * 6 + 7}
        anyData={anydata}
      /> */}

      {/* <PassingProp students={['Anajani', 'Reshime', 'Azim', 'Dinda']} /> */}

      {/* <OptionalProps />
      <OptionalProps person='debasish' /> */}

      {/* <SpradingProps a={x.a} b={x.b} />

      <SpradingProps {...x} /> */}


      {/* <ChildProps>
        <span>
          I am a Child Props
        </span>
      </ChildProps> */}

      {/* <ValidProps /> */}
      <Product
      // n1='AirMax'
      // n2="Wintar Collection"
      // n3="No Desc"
      // p1={200}
      // p3={300}
      // size={[1, 2, 3, 4, 5, 6]}
      // color={['yellow', 'black', 'blue']}
      />
    </>
  );
}

export default App;
