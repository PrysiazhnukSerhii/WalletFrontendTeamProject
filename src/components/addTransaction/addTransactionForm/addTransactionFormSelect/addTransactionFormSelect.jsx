import Select from 'react-select';
import { selectStyles } from './addTransactionFormSelect.styled';

const options = [
  { value: 'main', label: 'Main' },
  { value: 'food', label: 'Food' },
  { value: 'auto', label: 'Auto' },
  { value: 'development', label: 'Development' },
  { value: 'children', label: 'Children' },
  { value: 'house', label: 'House' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

export const MySelect = props => (
  <Select
    options={options}
    isClearable
    placeholder="Select a category"
    styles={selectStyles}
    maxMenuHeight={350}
    closeMenuOnClick={false}
    {...props}
  />
);
