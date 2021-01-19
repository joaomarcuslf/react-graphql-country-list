import React from 'react';
import { useHistory } from 'react-router-dom';

import { get } from 'lodash';

import ButtonGroup from '../../components/button-group';
import InputField from '../../components/input-field';

const EditForm = ({
  selected = {}, saveCountry,
}) => {
  const history = useHistory();

  const [nameValue, nameChanger] = React.useState(get(selected, ['name']));
  const [capitalValue, capitalChanger] = React.useState(get(selected, ['capital']));
  const [areaValue, areaChanger] = React.useState(get(selected, ['area']));
  const [populationDensityValue, populationDensityChanger] = React.useState(get(selected, ['populationDensity']));

  return (
    <form>
      <div className="columns is-multiline">
        <article className="column is-12 is-flex is-justified-center" key={get(selected, ['name'])}>
          <figure className="country-flag">
            <img src={get(selected, ['flag', 'svgFile'])} alt={`${get(selected, ['name'])} Flag`} />
          </figure>
        </article>

        <div className="column">
          <InputField
            id="name"
            text="Name"
            type="text"
            placeholder="Name Placeholder"
            value={nameValue}
            onChange={nameChanger}
          />

          <InputField
            id="capital"
            text="Capital"
            type="text"
            placeholder="Capital Placeholder"
            value={capitalValue}
            onChange={capitalChanger}
          />

          <InputField
            id="area"
            text="Area"
            type="number"
            placeholder="Area Placeholder"
            value={areaValue}
            onChange={areaChanger}
          />

          <InputField
            id="populationDensity"
            text="Population Density"
            type="number"
            placeholder="Population Density Placeholder"
            value={populationDensityValue}
            onChange={populationDensityChanger}
          />
        </div>
      </div>

      <ButtonGroup
        groups={[
          {
            text: 'Back',
            className: 'is-warning',
            handler: () => {
              if (confirm('Are you sure?')) {
                history.goBack();
              }
            },
          },
          {
            text: 'Save',
            className: 'is-info',
            type: 'submit',
            disabled: !(nameValue && capitalValue && areaValue && populationDensityValue),
            handler: () => {
              saveCountry({
                ...selected,
                name: nameValue,
                capital: capitalValue,
                area: areaValue,
                populationDensity: populationDensityValue,
              });

              history.push('/');
            },
          },
        ]}
      />
    </form>
  );
};
export default EditForm;
