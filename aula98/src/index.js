// ES6 Modules - Import/Export 
// Módulos são arquivos. Quando criamos módulos, criamos cada um no seu mundinho. Imagine o escopo de uma função, não conseguimos acessar uma função, então precisamos de um return.
// No mundo dos módulos, temos como exportar variáveis, funções e classes para outros módulos

// Sintaxes de imports 
/* 
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name"; var promise = import("module-name"); // This is a stage 3 proposal.
 */

import { nome as nome2,sobrenome, idade, soma, Pessoa } from "./modulo1"

const nome = 'Rodis'
console.log(nome, nome2, sobrenome, idade);

const soma2 = soma(2, 2);
console.log(soma2);

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1);