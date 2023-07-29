import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Almacen() {

  const [nombre, setNombre] = useState('');
  const [id_tipo, setId_tipo] = useState(Number);
  const [cantidad, setCantidad] = useState(Number);
  const [fecha_vencimiento, setFecha_vencimiento] = useState('');
  const [imagen, setImagen] = useState([]);
  const [id_farmaceuta, setId_farmaceuta] = useState(Number);

  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/ejercicios/farmaciay/src/PHP/articulo.php');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProduct = product.filter(product => {
    const fullName = `${product.nombre}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost/ejercicios/farmaciay/src/PHP/articulo.php`, {
        data: { id: id }
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost/ejercicios/farmaciay/src/PHP/articulo.php`, {
        id: id,
        nombre: nombre,
        id_tipo: id_tipo,
        cantidad: cantidad,
        fecha_vencimiento: fecha_vencimiento,
        imagen: imagen,
        id_farmaceuta: id_farmaceuta,
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="row m-4 userTable">
      <Input
        type="text"
        className="form-control"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Buscar Producto..."
      />

      <Table bordered responsive className='userTable'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Fecha Vencimiento</th>
            <th>Farmaceuta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProduct.length > 0 ? (
            filteredProduct.map(product => (
              <tr key={product.id}>
                <td><img src={product.imagen} width={100} alt={product.nombre} /></td>
                <td>{product.nombre}</td>
                <td>{product.id_tipo}</td>
                <td>{product.cantidad}</td>
                <td>{product.fecha_vencimiento}</td>
                <td>{product.id_farmaceuta}</td>
                <td>
                  <Button color="danger" onClick={toggle}>
                    Editar
                  </Button>
                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Edicion de: {product.nombre}</ModalHeader>
                    <ModalBody>
                      <Input type="text" name="nombre" id="nombre" placeholder="Nombre" defaultValue={nombre} onChange={(e) => setNombre(e.target.value)} />

                      <Input type="number" name="tipo" id="id_tipo" placeholder="Tipo" defaultValue={id_tipo} onChange={(e) => setId_tipo(e.target.value)} />

                      <Input type="number" name="cantidad" id="cantidad" placeholder="Cantidad" defaultValue={cantidad} onChange={(e) => setCantidad(e.target.value)} />

                      <Input type="text" name="fecha_vencimiento" id="fecha_vencimiento" placeholder="Fecha Vencimiento" defaultValue={fecha_vencimiento} onChange={(e) => setFecha_vencimiento(e.target.value)} />

                      <Input type="text" name="imagen" id="imagen" placeholder="Imagen" defaultValue={imagen} onChange={(e) => setImagen(e.target.value)} />

                      <Input type="number" name="farmaceuta" id="id_farmaceuta" placeholder="Farmaceuta" defaultValue={id_farmaceuta} onChange={(e) => setId_farmaceuta(e.target.value)} />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => handleUpdate(product.id)}>
                        Guardar
                      </Button>{' '}
                      <Button color="secondary" onClick={toggle}>
                        Salir
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <Button color="danger" onClick={() => handleDelete(product.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No se encontraron resultados.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Almacen;