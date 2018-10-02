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


b = template.render(tablita = df.to_html(classes='df',index=False))

with open('test_dos.html', 'w') as f:
    f.write(b)

