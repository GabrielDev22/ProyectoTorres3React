import "./ContenidoComponent.css"
export const ContenidoComponent = () => {
    return(
        <section className="container">
            <div className="contenido1">
            <h1>¿QUE ES LA PROGRAMACION?</h1>

            <img className="imagenes_primarias" src="images/QueEsLaProgramacion.png" alt="QueEsLaProgramacion" />

            <p>
                La programación es un proceso de crear una instruccion que le dice a una computadora como realizar algún tipo de tarea. Pero no solo la acción de escribir un código para que la computadora o el software lo ejecute. Incluye, además, todas las tareas necesarias para que el código funcione correctamente y cumpla el objetivo para el cual se escribió. 
            </p>

            <p>
                En la actualidad, la noción de programación se encuentra muy asociada a la creación de aplicaciones de informática y videojuegos. En este sentido, es el proceso por el cual una persona desarrolla un programa, valiéndose de una herramienta que le permita escribir el código (el cual puede estar en uno o varios lenguajes, como C++, Java y Python, entre muchos otros) y de otra que sea capaz de “traducirlo” a lo que se conoce como lenguaje de máquina, que puede "comprender" el microprocesador.
            </p>
            </div>

    <div class="contenido2">

        <h2>Funcionamiento de un programa</h2>

        <img className="imagenes_primarias" src="images/FuncionamientoDelPrograma.png" alt="FuncionamientoDelPrograma" />

        <p>
            Para crear un programa y que la computadora lo interprete y ejecute, las instrucciones deben escribirse en un lenguaje de programación.
        </p>

        <p>
            El lenguaje entendido por una computadora se conoce como código máquina. Consiste en secuencias de instrucciones básicas que el procesador reconoce, codificadas como cadenas de números 1 y 0 (sistema binario "a ver estudiado"). En los primeros tiempos de la computación se programaba directamente en código máquina. Escribir programas así resultaba demasiado complicado, también era difícil entenderlos y mantenerlos una vez escritos. Con el tiempo, se fueron desarrollando herramientas para facilitar el trabajo.
        </p>

        <p>
             Una vez que se termina de escribir un programa, es necesario de alguna forma traducirlo a lenguaje máquina, que es lo único que entiende el procesador. Esta tarea es por medio de un programa adicional que toma el código escrito y lo procesa. Se llama compilación: el programa toma el código en un lenguaje y genera código en el otro; al programa traductor se lo llama compilador. En general se habla de compilación y compiladores cuando el lenguaje de origen es de alto nivel; Generalmente existe una fase posterior a la compilación denominada enlace o enlazado (linking en inglés). Los programas pueden escribirse en partes separadas y además pueden usar recursos provistos por bibliotecas. Estos se interlazan y asi genera un programa ejectuable completo.
        </p>
    </div>

    <div class="contenido3">

        <h2>Objetivos de la programacion</h2>

        <img class="imagenes_primarias" src="images/objetivosProgramacion.jpg" alt="objetivosProgramacion" />

        <p>
            La programación debe perseguir la obtención de programas de calidad. Para ello se establece una serie de factores que determinan la calidad de un programa. Algunos de los factores de calidad más importantes son los siguientes:
        </p>

        <ul>
            <li className="parrafos">
                Correcto: Un programa es correcto si hace lo que debe hacer tal y como se estableció en las fases previas a su desarrollo. Para determinar si un programa hace lo que debe, es muy importante especificar claramente qué debe hacer el programa antes de su desarrollo y, una vez acabado, compararlo con lo que realmente hace. Al verificar este comportamiento está cumpliendo dicho objetivo.
            </li>

            <li className="parrafos">
                Claridad: Es muy importante que el programa sea lo más claro y legible posible, para facilitar tanto su desarrollo como su posterior mantenimiento. Al elaborar un programa se debe intentar que su estructura sea sencilla y coherente, así como cuidar el estilo de programación. De esta forma se ve facilitado el trabajo del programador, tanto en la fase de creación como en las fases posteriores de corrección de errores, ampliaciones, modificaciones, etc. Fases que pueden ser realizadas incluso por otro programador, con lo cual la claridad es aún más necesaria para que otros puedan continuar el trabajo fácilmente.
            </li>

            <li className="parrafos">
                Eficiencia: Se trata de que el programa, además de realizar aquello para lo que fue creado (es decir, que sea correcto), lo haga gestionando de la mejor forma posible los recursos que utiliza. Normalmente, al hablar de eficiencia de un programa, se suele hacer referencia al tiempo que tarda en realizar la tarea para la que ha sido creado y a la cantidad de memoria que necesita, pero hay otros recursos que también pueden ser de consideración para mejorar la eficiencia de un programa, dependiendo de su naturaleza (espacio en disco que utiliza, tráfico en la red que genera, etc.).
            </li>

            <li className="parrafos">
                Portabilidad: Un programa es portable cuando tiene la capacidad de poder ejecutarse en una plataforma, ya sea hardware o software, diferente a aquella en la que se desarrolló. La portabilidad es una característica muy deseable para un programa, ya que permite, por ejemplo, un programa que se ha elaborado para el sistema GNU/Linux  también pueda ejecutarse en el sistema operativo Windows. Consecuentemente el programa puede llegar a más usuarios.
            </li>
        </ul>
    </div>
</section>
    )
}