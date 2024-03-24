import { createDescription } from "@/app/actions";
import { Counter } from "@/app/components/Counter";
import { CreateButtomBar } from "@/app/components/CreateButtomBar";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DescriptionPage({params}:{params:{id:string}}){
    return(
  <>
  <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
            Descreve a tua Home
        </h2>
  </div>

  <form action={createDescription} >
    <input type="hidden" name="idHome" value={params.id}/>
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
            <div className="flex flex-col gap-y-2">
                <Label>Title</Label>
                <Input  type="text" name="title" required placeholder="Title"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <Label>Description</Label>
                <Textarea name="description" required placeholder="Plese describe!!"/>

            </div>
            <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input type="number" name="price" required placeholder="Price to night" min={10}/>
            </div>
            <div className="flex flex-col ga-y-2">
                <Label>Image</Label>
                <Input type="file" name="foto" required placeholder="Selecione a Imagem"/>

            </div>
            <Card>
                <CardHeader className="flex flex-col gap-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h3 className="underline font-medium">Guest</h3>
                        <p className="font-medium text-sm">How many guest do you want</p>
                </div>
                <Counter name="guest"/>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h3 className="underline font-medium">Rooms</h3>
                        <p className="font-medium text-sm">How many Rooms do you want</p>
                </div>
                <Counter name="rooms"/>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h3 className="underline font-medium">BadRooms</h3>
                        <p className="font-medium text-sm">How many BatRooms do you want</p>
                </div>
                <Counter name="badroons"/>
                  </div>

                </CardHeader>



            </Card>

        </div>
<CreateButtomBar/>
  </form>
  </>
    )
}