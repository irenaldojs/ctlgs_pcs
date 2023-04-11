import './Home.css';
function Home() {
  return (
    <div className="p-3 p-sm-5">
      <h1 className="fs-1 text-center">Bem vindo</h1>
      <br />
      <div className="primeiro fs-5">
        <p>
          Na hora de comprar uma peça para o seu veículo, é fundamental estar munido das
          informações corretas do seu carro. Algumas dessas informações podem ser de fácil
          acesso, enquanto outras podem ser mais difíceis de se obter. Para garantir uma
          compra assertiva e tranquila, é recomendável que você tenha em mãos as seguintes
          informações:
        </p>
        <ul>
          <li>
            Nome correto do veículo e montadora: como, por exemplo, Gol da Volkswagen, Uno
            da Fiat ou HB20 da Hyundai.
          </li>
          <li>Ano de fabricação do veículo.</li>
          <li>Motor do veículo, como Ap 1.8 8 válvulas, 1.6 16 válvulas ou 1.0 VHC.</li>
          <li>
            Combustível utilizado no veículo, seja gasolina, álcool, flex ou diesel.
          </li>
          <li>
            Opcionais do veículo, como ar condicionado, freios ABS, direção hidráulica,
            direção elétrica, tração 4x4, dentre outros.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
