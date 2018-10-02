import numpy as np
import pandas as pd
from jinja2 import Template, Environment, FileSystemLoader, select_autoescape



df = pd.DataFrame({'a': np.arange(10), 'b': np.random.randn(10)})

nombre_template_reporte: str = "template.html"
configuracion_jinja: Environment = Environment(
    loader=FileSystemLoader('./template'),
    autoescape=select_autoescape(['html'])
)
template: Template = configuracion_jinja.get_template(nombre_template_reporte)

tabla1 = pd.read_csv('../inst/extdata/clima_ensenada.csv')
tabla2 = pd.read_csv('../inst/extdata/clima_guadalupe.csv')
tabla3 = pd.read_csv('../inst/extdata/clima_cedros.csv')
tabla4 = pd.read_csv('../inst/extdata/clima_la_paz.csv')

b = template.render(tablita1 = tabla1.to_html(index=False), tablita2 = tabla2.to_html(index=False),tablita3 = tabla3.to_html(index=False),tablita4 = tabla4.to_html(index=False),)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(b)

