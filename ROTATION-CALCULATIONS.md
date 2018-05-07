# Piece Rotation Calculations

## PIECE_TYPE_I

```
Form[0]:                             Form[1]:

  | 0| 1| 2| 3                         | 0| 1| 2| 3
--+--+--+--+--                       --+--+--+--+--
 0|  |  |  |                          0|  |##|  |  
--+--+--+--+--                       --+--+--+--+--
 1|##|##|##|##          ===>          1|  |##|  |  
--+--+--+--+--                       --+--+--+--+--
 2|  |  |  |                          2|  |##|  |  
--+--+--+--+--                       --+--+--+--+--
 3|  |  |  |                          3|  |##|  |  


Coordinates Form[0]:                Coordinates Form[1]:

[[0, 1], [1, 1], [2, 1], [3, 1]]    [[1, 0], [1, 1], [1, 2], [1, 3]]


Rotation[0]: [[1, -1], [0, 0], [-1, 1], [-2, 2]]
Rotation[1]: [[-1, 1], [0, 0], [1, -1], [2, -2]] // Backwards, Rotation[0] * (-1)
```

## PIECE_TYPE_J

```
Form[0]:                             Form[1]:                             Form[2]:                             Form[3]:

  | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 0|  |  |  |                          0|  |##|  |                          0|##|  |  |                          0|  |##|##|  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 1|##|##|##|            ===>          1|  |##|  |            ===>          1|##|##|##|            ===>          1|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 2|  |  |##|                          2|##|##|  |                          2|  |  |  |                          2|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 3|  |  |  |                          3|  |  |  |                          3|  |  |  |                          3|  |  |  |  


Coordinates Form[0]:                 Coordinates Form[1]:                 Coordinates Form[2]:                 Coordinates Form[3]:

[[0, 1], [1, 1], [2, 1], [2, 2]]     [[1, 0], [1, 1], [1, 2], [0, 2]]     [[0, 0], [0, 1], [1, 1], [2, 1]]     [[2, 0], [1, 0], [1, 1], [1, 2]]


Rotation[0]: [[1, -1], [0, 0], [-1, 1], [-2, 0]]
Rotation[1]: [[1, 0], [-1, 0], [0, -1], [2, -1]]
Rotation[2]: [[2, 0], [1, -1], [0, 0], [-1, 1]]
Rotation[3]: [[-2, 1], [0, 1], [1, 0], [1, 0]]
```

## PIECE_TYPE_L

```
Form[0]:                             Form[1]:                             Form[2]:                             Form[3]:

  | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 0|  |  |  |                          0|##|##|  |                          0|  |  |##|                          0|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 1|##|##|##|            ===>          1|  |##|  |            ===>          1|##|##|##|            ===>          1|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 2|##|  |  |                          2|  |##|  |                          2|  |  |  |                          2|  |##|##|  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 3|  |  |  |                          3|  |  |  |                          3|  |  |  |                          3|  |  |  |  


Coordinates Form[0]:                 Coordinates Form[1]:                 Coordinates Form[2]:                 Coordinates Form[3]:

[[0, 2], [0, 1], [1, 1], [2, 1]]     [[0, 0], [1, 0], [1, 1], [1, 2]]     [[2, 0], [2, 1], [1, 1], [0, 1]]     [[2, 2], [1, 2], [1, 1], [1, 0]]


Rotation[0]: [[0, -2], [1, -1], [0, 0], [-1, 1]]
Rotation[1]: [[2, 0], [1, 1], [0, 0], [-1, -1]]
Rotation[2]: [[0, -2], [-1, 1], [0, 0], [1, -1]]
Rotation[3]: [[-2, 0], [-1, -1], [0, 0], [1, 1]]
```

## PIECE_TYPE_S

```
Form[0]:                             Form[1]:

  | 0| 1| 2| 3                         | 0| 1| 2| 3
--+--+--+--+--                       --+--+--+--+--
 0|  |  |  |                          0|##|  |  |  
--+--+--+--+--                       --+--+--+--+--
 1|  |##|##|            ===>          1|##|##|  |  
--+--+--+--+--                       --+--+--+--+--
 2|##|##|  |                          2|  |##|  |  
--+--+--+--+--                       --+--+--+--+--
 3|  |  |  |                          3|  |  |  |  


Coordinates Form[0]:                 Coordinates Form[1]:

[[0, 2], [1, 2], [1, 1], [2, 1]]     [[0, 0], [0, 1], [1, 1], [1, 2]]


Rotation[0]: [[0, -2], [-1, -1], [0, 0], [-1, 1]]
Rotation[1]: [[0, 2], [1, 1], [0, 0], [1, -1]]
```

## PIECE_TYPE_T

```
Form[0]:                             Form[1]:                             Form[2]:                             Form[3]:

  | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3                         | 0| 1| 2| 3
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 0|  |  |  |                          0|  |##|  |                          0|  |##|  |                          0|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 1|##|##|##|            ===>          1|##|##|  |            ===>          1|##|##|##|            ===>          1|  |##|##|  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 2|  |##|  |                          2|  |##|  |                          2|  |  |  |                          2|  |##|  |  
--+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--                       --+--+--+--+--
 3|  |  |  |                          3|  |  |  |                          3|  |  |  |                          3|  |  |  |  


Coordinates Form[0]:                 Coordinates Form[1]:                 Coordinates Form[2]:                 Coordinates Form[3]:

[[0, 1], [1, 1], [1, 2], [2, 1]]     [[1, 0], [1, 1], [0, 1], [1, 2]]     [[2, 1], [1, 1], [1, 0], [0, 1]]     [[1, 2], [1, 1], [2, 1], [1, 0]]


Rotation[0]: [[1, -1], [0, 0], [-1, -1], [-1, 1]]
Rotation[1]: [[1, -1], [0, 0], [-1, -1], [-1, 1]]
Rotation[2]: [[-1, 1], [0, 0], [1, 1], [1, -1]]
Rotation[3]: [[-1, -1], [0, 0], [-1, 1], [1, 1]]
```