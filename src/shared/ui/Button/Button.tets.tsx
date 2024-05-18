import { render, screen} from "@testing-library/react"
import { Button } from "./Button"

describe( 'Button', () =>{
    test( 'witch first params', ()=>{
       render(<Button>TEST</Button>);
       expect(screen.getByText('TEST'))
    })

})