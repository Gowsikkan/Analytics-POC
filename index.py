from calendar import month
from ctypes import alignment
from distutils.log import debug
from urllib.parse import MAX_CACHE_SIZE
from click import style
import dash
import dash_html_components as html
from numpy import average
import plotly.graph_objects as go
import dash_core_components as dcc
import pandas as pd
import plotly.express as px
from dash.dependencies import Input, Output

app = dash.Dash()

df = pd.read_csv('Financial Sample.csv')

#Repacing comma and spaces
df[' Manufacturing Price '] = df[' Manufacturing Price '].str.replace('$', '')
df[' Sale Price '] = df[' Sale Price '].str.replace('$', '')
df[' Gross Sales '] = df[' Gross Sales '].str.replace('$', '')
df[' Gross Sales '] = df[' Gross Sales '].str.replace(',', '')
df[' COGS '] = df[' COGS '].str.replace('$', '')
df[' COGS '] = df[' COGS '].str.replace(',', '')
df[' Profit '] = df[' Profit '].str.replace('$', '')
df[' Profit '] = df[' Profit '].str.replace(',', '')
df[' Profit '] = df[' Profit '].str.replace(' -   ', '')
df[' Profit '] = df[' Profit '].str.replace(' ', '')
df[' Profit '] = df[' Profit '].str.replace('-', '')
df['  Sales ']=df['  Sales '].str.replace('$','')
df['  Sales ']=df['  Sales '].str.replace(',','')


#Changing Datatype
df['  Sales '] = df['  Sales '].astype('float')
df[' Manufacturing Price '] = df[' Manufacturing Price '].astype('float')
df[' Sale Price '] = df[' Sale Price '].astype('float')
df[' Gross Sales '] = df[' Gross Sales '].astype('float')
df[' COGS '] = df[' COGS '].astype('float')
df[' Profit '] = df[' Profit '].astype('float')
df['Date'] =  pd.to_datetime(df['Date'])


@app.callback(Output("graph", "figure"),Input("dropdown", "value"))
def update_bar_chart(day): # replace with your own data source
    mask = df['Country'] == day
    fig = px.bar(df[mask], x=' Product ', y='  Sales ', color='Country', barmode='group')
    return fig


df1=df.query("Country=='Canada'")
fig2 = px.scatter(df, x ='  Sales ', y =' Product ',size=' Profit ',color="Segment",size_max=90)

fig3 = px.histogram(df, x =' Month Name ',y='  Sales ')

fig4 = px.bar(df, x ='Country', y =' Profit ',barmode='group', color='Segment')

fig5 = px.scatter_3d(df, x ='Country', z =' Product ', y='  Sales ', color='Country')
fig5.update_layout(
    autosize=False,
    width=1000,
    height=1000,
)

fig6 = go.Figure(data=[go.Pie(labels=df[' Month Name '], values=df[' Profit '], hole=.4)])

fig7 = px.funnel_area(names=df['Country'],values=df[' Profit '])

fig8 = go.Figure(go.Indicator(
    mode = "number+delta",
    value = average(df['  Sales ']),
    delta = {"reference": 90, "valueformat": ".0f"},
    title = {"text": "Sales"},
    domain = {'y': [0, 1], 'x': [0.25, 0.75]}))
fig8.add_trace(go.Scatter(y = df['  Sales ']))
fig8.update_layout(xaxis = {'range': [0, 62]})

fig9 = go.Figure(go.Indicator(
    mode = "number+delta",
    value = average(df[' Profit ']),
    delta = {"reference": 90, "valueformat": ".0f"},
    title = {"text": "Profit"},
    domain = {'y': [0, 1], 'x': [0.25, 0.75]}))

fig9.add_trace(go.Scatter(y = df[' Profit ']))
fig9.update_layout(xaxis = {'range': [0, 62]})

fig10 = px.sunburst(df, path=['Segment','Country'])
fig10.update_layout(
    autosize=False,
    width=200,
    height= 200,
)


app.layout = html.Div([
  dcc.Graph(
    id = 'bar7',
    figure = fig8
  ),
  dcc.Graph(
    id = 'bar8',
    figure = fig9
  ),
  
  dcc.Graph(
    id = 'bar3',
    figure = fig4
  ),
  html.H4('Select Country'),
    dcc.Dropdown(
        id="dropdown",
        options=["Canada", "France", "Mexico","United States of America","Germany"],
        value="Canada",
        clearable=False,
    ),
    dcc.Graph(
    id = 'graph',
  ),

  dcc.Graph(
    id = 'Scatter',
    figure = fig2
  ),

  dcc.Graph(
    id = 'bar2',
    figure = fig3
  ),

  dcc.Graph(
    id = 'bar4',
    figure = fig5
  ),

  dcc.Graph(
    id = 'bar5',
    figure = fig6
  ),
  dcc.Graph(
    id = 'bar6',
    figure = fig7
  ),
  dcc.Graph(
    id = 'bar10',
    figure = fig10
  )
])

if __name__ == '__main__': 
    app.run_server(debug=True, port=8051)