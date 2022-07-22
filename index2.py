
from calendar import month
from distutils.log import debug
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



@app.callback(
    Output("graph", "figure"), 
    Input("dropdown", "value"))
def update_bar_chart(day): # replace with your own data source
    mask = df['Country'] == day
    fig = px.bar(df[mask], x=' Product ', y='  Sales ', color='Country', barmode='group')
    return fig

fig1 = px.bar(df, x =' Product ', y ='  Sales ', barmode='group', color='Country')
fig2 = px.scatter(df, x ='Segment', y =' Profit ')
fig3 = px.scatter(df, x =' Manufacturing Price ', y =' Sale Price ')
fig4 = px.bar(df, x ='Country', y =' Profit ', color='Segment')
fig5 = px.scatter(df, x =' Profit ', y =' Product ', color='  Sales ')
fig6 = go.Figure(data=[go.Pie(labels=df[' Month Name '], values=df[' Profit '], hole=.5)])
fig7 = go.Figure(data=[go.Pie(labels=df[' Product '], values=df['Units Sold'], hole=.5)])

app.layout = html.Div([
    html.H4('Restaurant tips by day of week'),
    dcc.Dropdown(
        id="dropdown",
        options=["Canada", "France", "Mexico","United States of America","Germany"],
        value="Canada",
        clearable=False,
    ),

    dcc.Graph(
      id="graph"
      ),

  dcc.Graph(
    id = 'example-graph',
    config = {'displayModeBar': False},
    figure = fig1
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
    id = 'bar3',
    figure = fig4
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
  )
])


if __name__ == '__main__': 
    app.run_server(debug=True, port=8051)