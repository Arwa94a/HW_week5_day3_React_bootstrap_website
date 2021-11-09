import Carsul from "./components/Carsul"
import ListPic from "./components/ListPic"
import Navbar from "./components/Navbar2"

function App() {
  return (
    <>
      <Navbar />
      <Carsul />
      <div class="row row-cols-4 g-4">
        <div class="col">
          <ListPic
            image={"https://upload.wikimedia.org/wikipedia/commons/9/9a/Falco_peregrinus_good_-_Christopher_Watson.jpg"}
            Title={"Peregrine falcon"}
            Body={
              "The peregrine falcon (Falco peregrinus), also known as the peregrine, and historically as the duck hawk in North America, is a cosmopolitan bird of prey (raptor) in the family Falconidae."
            }
          />
        </div>
        <div class="col">
          <ListPic
            image={"https://farm3.staticflickr.com/2802/4358517631_f0ecca43a3_z.jpg?zz=1"}
            Title={"Falco peregrinus brookei"}
            Body={
              "Falco peregrinus was first described under its current binomial name by English ornithologist Marmaduke Tunstall in his 1771 work Ornithologia Britannica. The scientific name Falco peregrinus is a Medieval Latin phrase that was used by Albertus Magnusin 1225. "
            }
          />
        </div>
        <div class="col">
          <ListPic
            image={"https://www.vilafalco.com/photos/calidus-peregrines/calidus13.jpg"}
            Title={"Falco peregrinus peregrinus"}
            Body={
              "he peregrine falcon(Falco peregrinus), also known as the peregrine,and historically as the duck hawkin North America,is a cosmopolitanbird of prey(raptor) in the familyFalconidae. A large, crow-sized falcon, it has a blue-grey back, barred white underparts, and a black head."
            }
          />
        </div>
        <div class="col">
          <ListPic
            image={"https://pbs.twimg.com/media/CB5OP8UVIAACJaK.jpg:large"}
            Title={"Barbary falcon"}
            Body={
              "The Barbary falcon (Falco peregrinus pelegrinoides) is a medium-sized falcon about the size of a crow. This bird of prey is mainly resident. It ranges from the Canary Islands eastwards across some parts of North Africa, the Middle East and Central Asia"
            }
          />
        </div>
      </div>
    </>
  )
}
export default App
