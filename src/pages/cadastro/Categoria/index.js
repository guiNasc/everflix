import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


const CadastroCategoria = () => {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000'
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value, // nome: 'valor'
    });
  };

  const handleChange = (eventInfo) => {
    const { value } = eventInfo.target;
    setValue(
      eventInfo.target.getAttribute('name'),
      value
    );
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <Link to="/">
        Ir para home
        </Link>

      <form onSubmit={
        (eventInfo) => {
          eventInfo.preventDefault()
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais)
        }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
        </label>
          <textarea
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </div>

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <button>
          Cadastrar
      </button>

      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}.${indice}`}>
              {categoria.nome}
            </li>
          )
        })
        }
      </ul>

    </PageDefault>
  );
};

export default CadastroCategoria;
