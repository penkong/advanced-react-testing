import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//jest exe this file before other test files
Enzyme.configure({adapter: new Adapter()});

//Enzyme give 3 api static shallow and fulldom