from keras.models import load_model
import pickle

# this is a function used to find the value prediction if dibates.


def loaddata(x):
    loaded_model = load_model("network.h5")
    sc = pickle.load(open('scaler.pkl', 'rb'))
    t = []
    t.append(x)
    t = sc.transform(t)
    y = loaded_model.predict(t)
    # y is float function between 0 and 1;
    return y
