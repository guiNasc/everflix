import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
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
      value,
    );
  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then( async (resp) => {
        const resposta = await resp.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={
        (eventInfo) => {
          eventInfo.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais);
        }
      }
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (<div>
        Loading...
      </div>)}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
};

export default CadastroCategoria;
